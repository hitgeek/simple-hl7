import { FileClient } from "./file-client";
import { FileServer } from "./file-server";
import { TcpClient } from "./tcp-client";
import { TcpServer } from "./tcp-server";

export declare const Server: {
  createTcpServer(options, handler): TcpServer;
  createTcpClient(options: CreateTcpClientOptions): TcpClient;
  createTcpClient(host: string, port: number): TcpClient;
  createFileServer(options, handler): FileServer;
  createFileClient(dest): FileClient;
};

export interface CreateTcpClientOptions {
  host: string;
  port: number;
  callback?: () => void;
  keepAlive?: boolean;
}
