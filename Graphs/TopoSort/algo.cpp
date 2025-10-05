/*
 * Linear Ordering of vertices such that if there is a edge between u and v , then always u appears before v in that ordering .
 * Possible only in DAG [Directed Acyclic Graph]
 */

#include <bits/stdc++.h>
using namespace std;
stack<int> st;

// Cycle in a Directed Graph
void topo_sort(int node, vector<int> adj[], vector<int> &vis)
{
    vis[node] = 1;
    // traversal
    for (auto &it : adj[node])
    {
        if (!vis[it])
        {
            topo_sort(it, adj, vis);
        }
    }
    // on backtrack
    st.push(node);
}

int main()
{
    int n, m;
    cin >> n >> m;
    int V = 10;
    vector<int> vis(V, 0);
    vector<int> adj[V + 1];
    for (int i = 0; i < m; i++)
    {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    for (int i = 1; i < V; i++)
    {
        if (!vis[i])
        {
            // already visited !!
            topo_sort(i, adj, vis);
        }
    }

    // This Prints one of the linear ordering [topo sort]
    while (!st.empty())
    {
        int top = st.top();
        st.pop();
        cout << top << " ";
    }

    return 0;
}
