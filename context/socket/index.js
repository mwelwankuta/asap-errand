import { createContext } from "react";

const socketContext = createContext(null);
export default socketContext;

export function SocketProvider({ children }) {
    // initialize socket.io
  return <socketContext.Provider>{children}</socketContext.Provider>;
}
