const base = import.meta.env.BASE_URL ?? "/";
const cleanBase = base.endsWith("/") ? base : `${base}/`;

export const links = {
  github: "https://github.com/Ch-Suharsha",
  email: "suharshacheedalla@gmail.com",
  linkedin: "https://www.linkedin.com/in/suharsha-cheedalla/" as string | null,
  resume: `${cleanBase}resume/Suharsha_Cheedalla_Resume.pdf`,
};
