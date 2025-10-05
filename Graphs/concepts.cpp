// * Path
// can contain a lot of vertices , edges and all of them are reachable.
// Node cannot appear twice in a path.

// Degree of a node -> no. of edges that go inside or outside of the node.
// Degree of a Graph : 2 * [no. of edges]

// Directed graph
// Indegree : no. of incoming edges
// Outdegree : no. of outgoing edges
// edge weight : weight of an edge else unit weight[weight = 1]

// ---------------------------------------------

/*
 * Given n[nodes], m[no. of edges]
 * m lines [to represent edges(x,y : edge between x and y)]
 * represent way1 : matrix one(adj[n+1][n+1])  : O(n*n)
 * represnt way2 : list : vector<int> adj[n+1] : O(2*edges)
 */

#include <bits/stdc++.h>
using namespace std;
int main()
{
    int n, m;
    cin >> n >> m;
    vector<pair<int, int>> adj[n + 1]; // 1 based indexing , else [n][m]
    for (int i = 0; i < m; i++)
    {
        // directed graph : O(E)
        int u, v, w;
        cin >> u >> v >> w;
        // edge from u -> v
        adj[u].push_back({v, w}); // on uth index , can you please store v , as v is neighbour of u
    }
    return 0;
}
// int main()
// {
//     int n, m;
//     cin >> n >> m;
//     vector<int> adj[n + 1]; // 1 based indexing , else [n][m]
//     for (int i = 0; i < m; i++)
//     {
//         // directed graph : O(E)
//         int u, v;
//         cin >> u >> v;
//         // edge from u -> v
//         adj[u].push_back(v); // on uth index , can you please store v , as v is neighbour of u
//     }
//     return 0;
// }
// int main()
// {
//     int n, m;
//     cin >> n >> m;
//     vector<int> adj[n + 1]; // 1 based indexing , else [n][m]
//     for (int i = 0; i < m; i++)
//     {
//         undirected graph : O(2*E)
//         int u, v;
//         cin >> u >> v;
//         edges from u -> v && // edges from v -> u
//         adj[u].push_back(v); // on uth index , can you please store v , as v is neighbour of u
//         adj[v].push_back(u); // on vth index , can you please store u , as u is neighbour of v
//     }
//     return 0;
// }
// int main()
// {
//     int n, m;
//     cin >> n >> m;
//     int adj[n + 1][n + 1]; // 1 based indexing , else [n][m]
//     for (int i = 0; i < m; i++)
//     {
//         int u, v;
//         cin >> u >> v;
//         adj[u][v] = 1; // for edge weight : adj[u][v] = w;
//         adj[v][u] = 1;
//     }
//     return 0;
// }

/*
 * Connected Components :

 always use visited array: vis[n+1]
 vis[n+1] = false
 for(int i=1;i<=10;i++) {
    if(!vis) {
    traversal(i); // designed in such a way : that it traverses the whole graph
    }
 }
 */