interface NodeData {
  label: string;
  sub?: string;
}

// A small horizontal flow diagram: three labeled nodes connected by
// right-angle traces, matching the schematic/pinout visual language used
// throughout the site (SignalDivider, SkillPinout, Timeline).
function FlowDiagram({
  nodes,
  edgeLabels,
}: {
  nodes: [NodeData, NodeData, NodeData];
  edgeLabels: [string, string];
}) {
  const nodeW = 84;
  const nodeH = 56;
  const y = 72;
  const xs = [10, 118, 226];

  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      {xs.map((x, i) => (
        <g key={i}>
          <rect
            x={x}
            y={y}
            width={nodeW}
            height={nodeH}
            rx="6"
            fill="none"
            stroke="rgb(var(--border))"
            strokeWidth="1.5"
          />
          <circle cx={x + 10} cy={y + 10} r="2.5" fill="rgb(var(--signal))" />
          <text
            x={x + nodeW / 2}
            y={y + nodeH / 2 - (nodes[i].sub ? 4 : -4)}
            textAnchor="middle"
            fontFamily="var(--font-jetbrains-mono), monospace"
            fontSize="10"
            fontWeight="500"
            letterSpacing="0.02em"
            fill="rgb(var(--text))"
          >
            {nodes[i].label}
          </text>
          {nodes[i].sub && (
            <text
              x={x + nodeW / 2}
              y={y + nodeH / 2 + 14}
              textAnchor="middle"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="9"
              fill="rgb(var(--text-muted))"
            >
              {nodes[i].sub}
            </text>
          )}
        </g>
      ))}

      {[0, 1].map((i) => {
        const x1 = xs[i] + nodeW;
        const x2 = xs[i + 1];
        const midY = y + nodeH / 2;
        return (
          <g key={i}>
            <line
              x1={x1}
              y1={midY}
              x2={x2 - 6}
              y2={midY}
              stroke="rgb(var(--signal))"
              strokeWidth="1.5"
              strokeDasharray="3 4"
            />
            <path
              d={`M${x2 - 10} ${midY - 4} L${x2 - 2} ${midY} L${x2 - 10} ${midY + 4}`}
              fill="none"
              stroke="rgb(var(--signal))"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x={(x1 + x2) / 2}
              y={midY - 10}
              textAnchor="middle"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="8.5"
              letterSpacing="0.04em"
              fill="rgb(var(--text-muted))"
            >
              {edgeLabels[i].toUpperCase()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// A vertical stack of the same three nodes — used where edge labels are
// long enough that a horizontal gap doesn't give them room to breathe.
// The label sits beside the connector instead of cramped above it.
function FlowDiagramVertical({
  nodes,
  edgeLabels,
}: {
  nodes: [NodeData, NodeData, NodeData];
  edgeLabels: [string, string];
}) {
  const nodeW = 148;
  const nodeH = 44;
  const x = 26;
  const ys = [8, 78, 148];

  return (
    <svg viewBox="0 0 220 200" className="h-full w-full" preserveAspectRatio="xMidYMid meet">
      {ys.map((y, i) => (
        <g key={i}>
          <rect
            x={x}
            y={y}
            width={nodeW}
            height={nodeH}
            rx="6"
            fill="none"
            stroke="rgb(var(--border))"
            strokeWidth="1.5"
          />
          <circle cx={x + 10} cy={y + 10} r="2.5" fill="rgb(var(--signal))" />
          <text
            x={x + nodeW / 2}
            y={y + nodeH / 2 - (nodes[i].sub ? 3 : -4)}
            textAnchor="middle"
            fontFamily="var(--font-jetbrains-mono), monospace"
            fontSize="10.5"
            fontWeight="500"
            letterSpacing="0.02em"
            fill="rgb(var(--text))"
          >
            {nodes[i].label}
          </text>
          {nodes[i].sub && (
            <text
              x={x + nodeW / 2}
              y={y + nodeH / 2 + 13}
              textAnchor="middle"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="9"
              fill="rgb(var(--text-muted))"
            >
              {nodes[i].sub}
            </text>
          )}
        </g>
      ))}

      {[0, 1].map((i) => {
        const y1 = ys[i] + nodeH;
        const y2 = ys[i + 1];
        const midX = x + nodeW / 2;
        return (
          <g key={i}>
            <line
              x1={midX}
              y1={y1}
              x2={midX}
              y2={y2 - 6}
              stroke="rgb(var(--signal))"
              strokeWidth="1.5"
              strokeDasharray="3 4"
            />
            <path
              d={`M${midX - 4} ${y2 - 10} L${midX} ${y2 - 2} L${midX + 4} ${y2 - 10}`}
              fill="none"
              stroke="rgb(var(--signal))"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x={midX + 14}
              y={(y1 + y2) / 2 + 3}
              textAnchor="start"
              fontFamily="var(--font-jetbrains-mono), monospace"
              fontSize="9"
              letterSpacing="0.04em"
              fill="rgb(var(--text-muted))"
            >
              {edgeLabels[i].toUpperCase()}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function BatteryGaugeDiagram() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-surface-2 p-6">
      <FlowDiagram
        nodes={[
          { label: "GAUGE IC", sub: "battery" },
          { label: "DRIVER", sub: "embedded linux" },
          { label: "HOST", sub: "system" },
        ]}
        edgeLabels={["I2C", "data"]}
      />
    </div>
  );
}

export function ArchivalSystemDiagram() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-surface-2 p-6">
      <FlowDiagramVertical
        nodes={[
          { label: "RECORDS", sub: "historical" },
          { label: "ARCHIVE", sub: "digital system" },
          { label: "+5TB", sub: "storage" },
        ]}
        edgeLabels={["migrate", "retain"]}
      />
    </div>
  );
}
