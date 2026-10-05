export type NoteBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "image"; src: string; alt: string; caption: string; tone?: "light" | "dark" };

export type FieldNote = {
  id: string;
  projectId: string;
  projectLabel: string;
  title: string;
  dek: string;
  author: string;
  readTime: string;
  publishedLabel: string;
  tags: string[];
  blocks: NoteBlock[];
};

export const fieldNotes: FieldNote[] = [
  {
    id: "cold-chain-fde-ownership",
    projectId: "chain-logistics",
    projectLabel: "Cold-Chain Logistics Assistant",
    title: "I Wanted to Understand How an FDE Takes Ownership, So I Built a Cold-Chain Logistics Assistant",
    dek: "A local R1 build about turning a vague request—talk to logistics data—into a controlled, auditable system an operations user could actually run.",
    author: "Suharsha Cheedalla",
    readTime: "9 min read",
    publishedLabel: "Field note",
    tags: ["FDE ownership", "Agent systems", "Data access", "RAG", "Docker"],
    blocks: [
      { type: "paragraph", text: "I was fascinated by how an AI Forward Deployed Engineer takes ownership of a problem from beginning to end. I was interested in the entire problem, not just the model." },
      { type: "paragraph", text: "Understanding what the business actually needs, finding where the data lives, working with an existing system, deciding what the application should be allowed to access, handling failures, testing the workflow, and leaving behind something that another person can run—that was the pattern I wanted to practice." },
      { type: "paragraph", text: "I chose a cold-chain logistics problem and tried to solve it from an FDE point of view." },
      { type: "heading", text: "Finding the problem" },
      { type: "paragraph", text: "A logistics team has fleet telemetry, GPS coordinates, IoT temperature readings, cargo conditions, route risk, port congestion, and delay probabilities. The data exists, but answering a simple operational question still requires several separate actions: understanding the database, writing a query, searching policy documents, checking outside conditions, and deciding what the result means." },
      { type: "paragraph", text: "The requirement I started with was simple: Operations users should be able to talk to their logistics data." },
      { type: "paragraph", text: "But a useful system cannot stop at a chat box. I had to answer where the data is stored, who is allowed to read it, which columns are safe to expose, how policy documents should be searched, how current weather should be included, how to record what the assistant did, what happens when a dependency fails, and how the same application can be rebuilt on another machine." },
      { type: "paragraph", text: "That is where I started to understand the FDE approach. The problem is not “add an LLM.” The problem is to turn a vague business request into a system that can be trusted and used." },
      { type: "heading", text: "Turning the requirement into a workflow" },
      { type: "paragraph", text: "I converted the vague request into questions that an operations user might actually ask:" },
      { type: "bullets", items: ["Which vehicles have unusual temperature readings?", "What should the dispatcher do after a cold-chain breach?", "Which shipments have a high delay probability?", "What is the current weather near a vehicle’s location?", "Should a shipment be escalated according to the SOP?"] },
      { type: "paragraph", text: "These questions do not belong to one data source. Some answers come from structured telemetry. Some come from policy documents. Some need current weather information." },
      { type: "paragraph", text: "So I did not create one large function and ask the model to handle everything. I separated the system into small tools, each with a clear responsibility. The business value was not that the application could call an LLM. The value was that an operations user could ask a question naturally and receive an answer grounded in the company’s data and procedures." },
      { type: "image", src: "/assets/notes/cold-chain/system-design.png", alt: "Cold-Chain Logistics Assistant system design", caption: "The R1 boundary: a Streamlit interface, an orchestrator, three narrow data tools, and an audit path.", tone: "light" },
      { type: "heading", text: "Choosing the local deployment boundary" },
      { type: "paragraph", text: "For the first version, I did not have access to Oracle, and I did not want to rent an EC2 instance before proving that the workflow worked. So I built the complete R1 system locally with Docker." },
      { type: "paragraph", text: "The system has two main containers. The MySQL container stores telemetry data and audit records. The Streamlit container contains the user interface, orchestrator, tools, policy files, and application dependencies. Docker Compose connects the services on a private network. From inside the Streamlit container, MySQL is reached through the service name mysql, not through localhost." },
      { type: "paragraph", text: "That detail sounds small, but it is part of the real work. If the services cannot communicate correctly, the architecture diagram does not matter." },
      { type: "heading", text: "Treating permissions as part of the solution" },
      { type: "paragraph", text: "The agent should not connect to the database as an administrator. I created separate identities for separate responsibilities: chain_ingest for ingestion, chain_agent for the assistant, and an administrator only for local setup and database administration." },
      { type: "paragraph", text: "The raw telemetry table is tbl_sc_fleet_hist_raw. The agent does not have direct SELECT access to that table. Instead, it reads from an approved view called v_agent_fleet. The view exposes only the operational columns required by the assistant, including timestamp, vehicle location, temperature, cargo condition, risk classification, delay probability, port congestion, route risk, and the ingestion flag." },
      { type: "paragraph", text: "The agent can also insert records into agent_audit_log, but it cannot use that permission to modify telemetry data." },
      { type: "paragraph", text: "I tested this boundary directly. When I tried to query the raw table as chain_agent, MySQL rejected the request with an access-denied error. That error was useful: it showed that the database was enforcing the rule instead of relying only on a prompt to tell the model what not to do." },
      { type: "paragraph", text: "The telemetry tool adds another protection layer. It accepts only one SELECT statement, rejects SQL comments and multiple statements, and requires the approved view to be present in the query. This is the difference between a demo that happens to work and a system with an understandable security boundary." },
      { type: "image", src: "/assets/notes/cold-chain/full-architecture.png", alt: "Cold-Chain Logistics Assistant detailed architecture", caption: "The permission boundary is visible in the architecture: the agent reads an approved view and writes audit records, while ingestion has a separate role.", tone: "light" },
      { type: "heading", text: "Building the SOP retrieval path" },
      { type: "paragraph", text: "The telemetry data is structured, but the operating procedures are written in a policy document. The SOP contains rules for temperature control, cold-chain breaches, port congestion, diversion, delay probability, and escalation. A normal database query is not the right way to search that document." },
      { type: "paragraph", text: "I used BGE-M3 as the local embedding model and ChromaDB as the local vector index. When a user asks a policy question, the system embeds the question, retrieves the most relevant SOP chunks, and passes those chunks to the generation model." },
      { type: "paragraph", text: "The embedding model and the generation model have different jobs. BGE-M3 helps find text with a similar meaning. The generation model explains the retrieved text in a form that an operations user can understand." },
      { type: "paragraph", text: "I also made SOP ingestion repeatable. The generated ChromaDB files are runtime data, so they are ignored by Git and can be recreated from the policy document during a fresh local setup." },
      { type: "image", src: "/assets/notes/cold-chain/sop-retrieval-flow.png", alt: "SOP retrieval flow from document to semantic search", caption: "The retrieval path stays separate from the structured telemetry path: document → chunks → embeddings → ChromaDB → semantic search.", tone: "dark" },
      { type: "heading", text: "Creating narrow tools instead of one unrestricted agent" },
      { type: "paragraph", text: "The agent has three tools. The telemetry tool queries the approved MySQL view. It can answer questions about vehicle location, temperature, cargo condition, risk, delay probability, port congestion, and route risk. The SOP search tool retrieves the relevant compliance guidance from ChromaDB. The weather tool calls the Open-Meteo API for current conditions near a shipment or corridor location." },
      { type: "paragraph", text: "Each tool has a clear reason to exist. That makes the system easier to test and makes the agent’s behavior easier to explain." },
      { type: "paragraph", text: "For example, a dispatcher could ask about a vehicle with a temperature breach and a delayed route. The agent may need telemetry to understand the current record, the SOP to determine the required action, and weather to add current external context. The answer is useful because the system can combine the information while still recording which tools were used." },
      { type: "heading", text: "Adding the orchestrator and user interface" },
      { type: "paragraph", text: "The orchestrator acts like a traffic controller for the workflow. It receives the user question, keeps the conversation thread, gives the generation model the system rules, and lets the model call the approved tools. After the tools return their results, the orchestrator sends the information back through the model for the final response." },
      { type: "paragraph", text: "I added instructions so that the assistant stays within the project scope. It can help with cold-chain shipment data, weather, and SOP guidance. It should not expose database credentials, SQL, internal configuration, or the application architecture to the end user." },
      { type: "paragraph", text: "Streamlit provides the user-facing interface. It keeps the chat history for the current session, sends questions to the orchestrator, and shows the final answer without exposing the internal tool trace. The database audit log records the thread ID, user question, tools used, status, timestamp, and error information when a request fails." },
      { type: "paragraph", text: "That audit trail gives me a way to answer a basic operational question: what did the assistant actually do for this request?" },
      { type: "image", src: "/assets/notes/cold-chain/request-flow.png", alt: "Request flow from user question to audited response", caption: "The complete request path stays legible: question → interface → orchestrator → selected tool → approved data source → grounded response → audit record.", tone: "dark" },
      { type: "heading", text: "The failures were part of the project" },
      { type: "paragraph", text: "The first dependency installation failed because the requirements file requested an Altair version that was not available for the environment. Then I discovered that the terminal was using the macOS Python 3.9 executable instead of the Python 3.12 environment I intended to use. Packages had been installed in one place while the script was running from another." },
      { type: "paragraph", text: "The repository also failed to push to GitHub because a PyTorch binary inside the virtual environment was 322.26 MB. The correct solution was not to use Git LFS for a local virtual environment. I removed the environment from Git and kept the dependency files so the environment could be recreated." },
      { type: "paragraph", text: "At one point, the telemetry table had duplicate rows because the ingestion process was appending data during a rebuild. I changed the controlled local ingestion to replace the table so that a fresh rebuild starts from a known state." },
      { type: "paragraph", text: "The agent also received an access-denied response when it tried to query the raw table. That became a security verification instead of a bug because the agent was supposed to read through the approved view only. After the application was containerized, Streamlit could start before MySQL was ready. I added a MySQL health check and made Streamlit wait for that health status. Streamlit received its own health check as well." },
      { type: "paragraph", text: "None of these issues were outside the AI project. They were the work required to make the AI system usable." },
      { type: "heading", text: "Making the setup reproducible" },
      { type: "paragraph", text: "I put the local setup process into scripts/bootstrap_local.sh so that the application can be rebuilt without manually remembering every command." },
      { type: "paragraph", text: "The Docker image contains Python, the application dependencies, the Streamlit application, the source code, and the policy files. The running containers use volumes for MySQL data, the Hugging Face model cache, and the local ChromaDB directory." },
      { type: "paragraph", text: "The result is not just a folder of Python scripts. It is a local system that can be started, tested, stopped, and rebuilt." },
      { type: "image", src: "/assets/notes/cold-chain/bootstrap-flow.png", alt: "Cold-chain local bootstrap sequence", caption: "A clean rebuild creates the users and permissions, loads telemetry, builds the restricted view, indexes the SOP, and starts Streamlit after MySQL is healthy.", tone: "dark" },
      { type: "heading", text: "Testing the complete workflow" },
      { type: "paragraph", text: "I did not stop after seeing the Streamlit page open. The automated tests cover the telemetry security boundary, database result formatting, SOP retrieval formatting, weather response formatting, and the out-of-scope policy. The current test suite passes nine tests." },
      { type: "paragraph", text: "I also tested the running containers after a clean restart. MySQL became healthy, Streamlit became healthy, telemetry returned data, SOP search returned policy context, weather returned current conditions, and the orchestrator created a successful audit record." },
      { type: "paragraph", text: "That path is the part I wanted to prove. A working model response by itself does not prove that the system works." },
      { type: "heading", text: "What this would look like for a real client" },
      { type: "paragraph", text: "This version is a local R1 build. I am not presenting it as a cloud production deployment because I did not use Oracle or EC2 for this version." },
      { type: "paragraph", text: "For a real client, the next discussions would be about the database ownership model, data retention, identity management, private networking, secret storage, observability, backup and recovery, model approval, response-time expectations, and business acceptance tests." },
      { type: "paragraph", text: "The local version gives those conversations a concrete starting point. The MySQL container can later be replaced by a managed database. The .env file can later be replaced by a secret manager. Docker health checks can become cloud readiness probes. The Streamlit service can move to a hosted container or another managed compute service." },
      { type: "paragraph", text: "I would not move the application to the cloud just because cloud deployment sounds more complete. I would move it when the business needs shared access, stronger availability, controlled networking, or a production operating model." },
      { type: "heading", text: "What I learned from building it" },
      { type: "paragraph", text: "The model is one component in the system. It is not the whole system." },
      { type: "paragraph", text: "The real engineering work was understanding the business request, connecting to data safely, choosing the right retrieval path, separating user permissions, handling failures, testing the workflow, and making the system reproducible." },
      { type: "paragraph", text: "That is the part of an AI Forward Deployed Engineer role that I wanted to practice. You need to be comfortable moving between a business conversation, a database, Python code, an architecture diagram, a terminal error, and a user-facing application." },
      { type: "paragraph", text: "I started with a vague requirement: talk to logistics data. I ended with a local application that can answer telemetry, SOP, and weather questions through a controlled agent workflow, while keeping the database boundary visible and auditable." },
      { type: "paragraph", text: "And that is the whole process for this local R1 build. Feel free to reach out with suggestions or questions." },
    ],
  },
];
