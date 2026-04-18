// src/data/topics.js
// ✏️ THIS IS YOUR CONTENT FILE — add/remove topics and subtopics here
// Each topic becomes a page at /topics/[slug]
// Each subtopic becomes a page at /topics/[slug]/[subtopic-slug]

export const topics = [
  {
    slug: 'ccna',
    title: 'CCNA',
    description: 'Cisco Certified Network Associate — foundational networking concepts',
    icon: '🌐',
    color: '#0070d2',
    subtopics: [
      {
        slug: 'network-fundamentals',
        title: 'Network Fundamentals',
        description: 'OSI model, TCP/IP, network topologies and basic concepts',
        content: `
## Network Fundamentals

The OSI (Open Systems Interconnection) model has 7 layers that describe how data travels across a network.

### The 7 OSI Layers
1. **Physical** — cables, hubs, bits
2. **Data Link** — MAC addresses, switches, frames
3. **Network** — IP addresses, routers, packets
4. **Transport** — TCP/UDP, ports, segments
5. **Session** — sessions between applications
6. **Presentation** — encryption, compression
7. **Application** — HTTP, FTP, DNS

### TCP vs UDP
| Feature | TCP | UDP |
|---------|-----|-----|
| Connection | Yes | No |
| Reliable | Yes | No |
| Speed | Slower | Faster |
| Use case | Web, Email | Video, DNS |

### Key Takeaway
TCP is reliable but slower. UDP is fast but no guarantee of delivery.
        `
      },
      {
        slug: 'ip-addressing',
        title: 'IP Addressing & Subnetting',
        description: 'IPv4, IPv6, subnet masks, CIDR notation and subnetting',
        content: `
## IP Addressing & Subnetting

An IP address identifies a device on a network. IPv4 uses 32-bit addresses.

### IPv4 Classes
| Class | Range | Default Mask |
|-------|-------|-------------|
| A | 1–126 | /8 |
| B | 128–191 | /16 |
| C | 192–223 | /24 |

### Subnetting Example
IP: 192.168.1.0/24
- Network: 192.168.1.0
- Broadcast: 192.168.1.255
- Usable hosts: 192.168.1.1 – 192.168.1.254 (254 hosts)

### CIDR Notation
/24 means 24 bits are the network part → 256 addresses, 254 usable hosts.

### Private IP Ranges
- 10.0.0.0/8
- 172.16.0.0/12
- 192.168.0.0/16
        `
      },
      {
        slug: 'routing',
        title: 'Routing Protocols',
        description: 'Static routing, RIP, OSPF, EIGRP and how routers forward packets',
        content: `
## Routing Protocols

Routers use routing protocols to learn paths and forward packets.

### Types of Routing
- **Static** — manually configured, no overhead
- **Dynamic** — routers learn routes automatically

### Common Protocols
| Protocol | Type | Metric |
|----------|------|--------|
| RIP | Distance Vector | Hop count (max 15) |
| OSPF | Link State | Cost (bandwidth) |
| EIGRP | Hybrid | Bandwidth + Delay |
| BGP | Path Vector | Policy-based |

### Administrative Distance
Lower = more trusted
- Static: 1
- OSPF: 110
- RIP: 120
        `
      },
      {
        slug: 'vlans',
        title: 'VLANs & Trunking',
        description: 'Virtual LANs, 802.1Q trunking, inter-VLAN routing',
        content: `
## VLANs & Trunking

A VLAN (Virtual LAN) segments a network logically without physical separation.

### Why VLANs?
- Reduce broadcast domains
- Improve security
- Simplify management

### VLAN Configuration (Cisco IOS)
\`\`\`
Switch(config)# vlan 10
Switch(config-vlan)# name SALES
Switch(config)# interface fa0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
\`\`\`

### 802.1Q Trunking
Trunks carry multiple VLANs between switches using VLAN tags.

\`\`\`
Switch(config-if)# switchport mode trunk
Switch(config-if)# switchport trunk allowed vlan 10,20,30
\`\`\`
        `
      },
      {
        slug: 'acls',
        title: 'Access Control Lists',
        description: 'Standard and extended ACLs, permit/deny rules, wildcard masks',
        content: `
## Access Control Lists (ACLs)

ACLs filter traffic based on rules — like a firewall at the router level.

### Standard ACL (filters by source IP only)
\`\`\`
Router(config)# access-list 10 permit 192.168.1.0 0.0.0.255
Router(config)# interface g0/1
Router(config-if)# ip access-group 10 out
\`\`\`

### Extended ACL (filters by source, destination, protocol, port)
\`\`\`
Router(config)# access-list 100 permit tcp 192.168.1.0 0.0.0.255 any eq 80
\`\`\`

### ACL Rules
- Processed top to bottom
- First match wins
- Implicit deny all at the end
- Standard ACL → place close to **destination**
- Extended ACL → place close to **source**
        `
      },
      {
        slug: 'nat',
        title: 'NAT & PAT',
        description: 'Network Address Translation, Port Address Translation, dynamic NAT',
        content: `
## NAT & PAT

NAT translates private IP addresses to public IPs for internet access.

### Types
| Type | Description |
|------|-------------|
| Static NAT | One private → one public (1:1) |
| Dynamic NAT | Pool of public IPs |
| PAT (Overload) | Many private → one public (most common) |

### PAT Configuration
\`\`\`
Router(config)# ip nat inside source list 1 interface g0/0 overload
Router(config)# access-list 1 permit 192.168.1.0 0.0.0.255
Router(config)# interface g0/1
Router(config-if)# ip nat inside
Router(config)# interface g0/0
Router(config-if)# ip nat outside
\`\`\`
        `
      },
    ]
  },
  {
    slug: 'linux-basics',
    title: 'Linux Basics',
    description: 'Essential Linux commands and concepts for beginners',
    icon: '🐧',
    color: '#e64a19',
    subtopics: [
      {
        slug: 'file-system',
        title: 'File System',
        description: 'Directory structure, navigation, file permissions',
        content: `
## Linux File System

Linux uses a hierarchical directory structure starting from root (/). 

### Key Directories
| Path | Purpose |
|------|---------|
| /etc | Configuration files |
| /home | User home directories |
| /var | Variable data (logs) |
| /usr | User programs |
| /tmp | Temporary files |

### Basic Commands
\`\`\`bash
ls -la          # List all files with details
cd /home/user   # Change directory
pwd             # Print working directory
mkdir mydir     # Create directory
rm -rf mydir    # Remove directory
\`\`\`
        `
      },
      {
        slug: 'permissions',
        title: 'File Permissions',
        description: 'chmod, chown, read/write/execute permissions explained',
        content: `
## File Permissions

Linux permissions control who can read, write, or execute a file.

### Permission Format
\`\`\`
-rwxr-xr--
 ^^^  ^^^  ^^^
 owner group others
\`\`\`

### chmod Examples
\`\`\`bash
chmod 755 file.sh   # rwxr-xr-x
chmod 644 file.txt  # rw-r--r--
chmod +x script.sh  # add execute
\`\`\`

### Number Reference
- 4 = read (r)
- 2 = write (w)  
- 1 = execute (x)
        `
      }
    ]
  },
  {
    slug: 'python',
    title: 'Python',
    description: 'Python programming from basics to automation',
    icon: '🐍',
    color: '#2e7d32',
    subtopics: [
      {
        slug: 'basics',
        title: 'Python Basics',
        description: 'Variables, data types, loops, functions',
        content: `
## Python Basics

Python is a beginner-friendly, versatile programming language.

### Variables & Data Types
\`\`\`python
name = "Alice"        # string
age = 25              # integer
score = 9.5           # float
is_active = True      # boolean
\`\`\`

### Loops
\`\`\`python
for i in range(5):
    print(i)          # 0 1 2 3 4

while age < 30:
    age += 1
\`\`\`

### Functions
\`\`\`python
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))  # Hello, Alice!
\`\`\`
        `
      }
    ]
  }
];
