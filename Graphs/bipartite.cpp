// bipartite graph -> if you can color the graph with 2 colors such that no 2 adjacent nodes have same color
// linear grapgh is always bipartite
// odd cycle length graphs are never bipartite

#include <bits/stdc++.h>
using namespace std;
bool bipartite_bfs(int start, vector<int> adj[], int V)
{
    vector<int> vis(V, -1);
    queue<int> q;
    q.push(start);
    vis[start] = 0;

    while (!q.empty())
    {
        int node = q.front();
        q.pop();

        for (auto &it : adj[node])
        {
            if (vis[it] == -1)
            {
                vis[it] = 1 - vis[node];
                q.push(it);
            }
            else if (vis[it] == vis[node])
            {
                return false;
            }
        }
    }
    return true;
}

bool bipartite_dfs(int node, vector<int> adj[], vector<int> &vis)
{
    vis[node] = 1;
    // traversal
    for (auto &it : adj[node])
    {
        if (vis[it] == -1)
        {
            vis[it] = !vis[node];
            if (bipartite_dfs(it, adj, vis) == false)
            {
                return false;
            }
        }
        else if (vis[it] == vis[node])
        {
            return false;
        }
    }
    return true;
}

int main()
{
    int n, m;
    cin >> n >> m;
    vector<int> adj[n + 1];
    for (int i = 0; i < m; i++)
    {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    vector<int> vis(V, -1);
    bipartite_bfs(1, adj);
    for (int i = 0; i < V; i++)
    {
        if (vis[i] != -1)
        {
            // already visited !!
            if (bipartite_dfs())
        }
    }
    bipartite_dfs(1, adj, vis);
    return 0;
}
