import crypto from "crypto";
const SECRET = "GOPAL_SECRET_API";

export function random() {
  return crypto.randomBytes(128).toString("base64");
}

export function authentication(salt: String, password: String) {
  return crypto
    .createHmac("sha256", [salt, password].join(`/`))
    .update(SECRET)
    .digest("hex");
}
