export default function checkIfLive(status) {
  if (status.abstractGameState === "Preview") return true;
  return false;
}
