import { logMessage } from "../utils";

export function ShowMessage({ message }: { message: string }) {
  logMessage(message);
  return (
    <div>
      <h2>Message</h2>
      <p>Message from ShowMessage component</p>
    </div>
  );
}
