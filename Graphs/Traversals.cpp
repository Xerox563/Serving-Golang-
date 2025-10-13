#include <bits/stdc++.h>
using namespace std;
// BFS Traversal
// Time : O(n) + O(2*E)
// Space : O(queue+vis+bfs) -> O(3*n)
void bfs_traversal(int n, vector<int> &vis, vector<int> &adj[])
{
    // basically doing a bfs_traversal [which simply uses the queue and as it is same as level order traversal]
    queue<int> q;
    q.push(n);
    vis[n] = 1; // traversed
    vector<int> bfs;
    while (!q.empty())
    {
        int node = q.front();
        bfs.push_back(node);
        q.pop();
        for (auto it : adj[node])
        {
            if (!vis[it])
            {
                q.push(it);
                vis[it] = 1;
            }
        }
    }
}

// DFS Traversal
// Time : O(n) + O(2*E)
// Space : O(recursion [stack space]+vis+bfs) -> O(3*n)
void dfs_traversal(int node, vector<int> &vis, vector<int> &adj[], vector<int> &dfs)
{
    vis[node] = 1;
    dfs.push_back(node);
    // Traversing the neighbours stored in adjacenecy list
    for (auto it : adj[node])
    {
        if (!vis[it])
        {
            dfs_traversal(it, vis, adj, dfs);
        }
    }
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
        adj[u].push_back(v); // v is the neightbour of u
        adj[v].push_back(u); //  u is the neighbour of v
    }
    vector<int> vis(n + 1, 0); // all unvisited
    // int vis[n+1] = {0}
    int startNode = 1;
    bfs_traversal(startNode, vis, adj); // start node

    // DFS
    vector<int> dfs;
    dfs_traversal(startNode, vis, adj, dfs); // start node
    return 0;
}
// for 0 based indexing -> n
// for 1 based indexing -> n+1