import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

const agents = [
  { id: "AGT-001", name: "Beacon-1", status: "Active", lastSeen: "2m ago", type: "HTTP" },
  { id: "AGT-002", name: "Beacon-2", status: "Idle", lastSeen: "5m ago", type: "DNS" },
  { id: "AGT-003", name: "Beacon-3", status: "Active", lastSeen: "1m ago", type: "HTTP" },
  { id: "AGT-004", name: "Beacon-4", status: "Offline", lastSeen: "1h ago", type: "SMB" },
];

export const AgentsTable = () => {
  return (
    <div className="glass-panel rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Agent ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Seen</TableHead>
            <TableHead>Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {agents.map((agent) => (
            <TableRow key={agent.id}>
              <TableCell className="font-mono">{agent.id}</TableCell>
              <TableCell>{agent.name}</TableCell>
              <TableCell>
                <span
                  className={cn(
                    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                    agent.status === "Active"
                      ? "bg-green-500/10 text-green-500"
                      : agent.status === "Idle"
                      ? "bg-yellow-500/10 text-yellow-500"
                      : "bg-red-500/10 text-red-500"
                  )}
                >
                  {agent.status}
                </span>
              </TableCell>
              <TableCell className="text-muted-foreground">{agent.lastSeen}</TableCell>
              <TableCell>{agent.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};