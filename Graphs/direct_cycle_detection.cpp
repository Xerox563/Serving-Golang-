#include <bits/stdc++.h>
using namespace std;
vector<int> check;

// Cycle in a Directed Graph
bool cycle_in_directed(int node, vector<int> adj[], vector<int> &vis, vector<int> &pathVis)
{
    vis[node] = 1;
    pathVis[node] = 1;
    // traversal
    for (auto &it : adj[node])
    {
        if (!vis[it])
        {
            // not visited till now
            if (cycle_in_directed(it, adj, vis, pathVis) == true)
            {
                return true;
            }
        }
        // both visited and pathvisited
        else if (pathVis[it])
        {
            return true;
        }
    }
    // on backtrack
    pathVis[node] = 0;
    return false;
}

// Eventual Safe State
bool eventual_safe_state(int node, vector<int> adj[], vector<int> &vis, vector<int> &pathVis)
{
    vis[node] = 1;
    pathVis[node] = 1;
    check[node] = 0;
    // traversal
    for (auto &it : adj[node])
    {
        if (!vis[it])
        {
            // not visited till now
            if (eventual_safe_state(it, adj, vis, pathVis) == true)
            {
                check[node] = 0;
                return true;
            }
        }
        // both visited and pathvisited
        else if (pathVis[it])
        {
            check[node] = 0; // can not be safe node as cycle is found
            return true;
        }
    }
    // on backtrack
    check[node] = 1;
    pathVis[node] = 0;
    ans.push_back(node);
    return false;
}

int main()
{
    int n, m;
    cin >> n >> m;
    int V = 10;
    vector<int> vis(V, 0);
    vector<int> pathVis(V, 0);
    vector<int> adj[V + 1];
    for (int i = 0; i < m; i++)
    {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }

    // Cycle Check in Directed Graph
    for (int i = 1; i < V; i++)
    {
        if (vis[i] != -1)
        {
            // already visited !!
            if (eventual_safe_state(i, adj, vis, pathVis) == true)
            {
                return true;
            }
        }
    }

    // Eventual Safe state
    for (int i = 1; i < V; i++)
    {
        if (vis[i] != -1)
        {
            // already visited !!
            eventual_safe_state(i, adj, vis, pathVis);
        }
    }
    vector<int> ans;
    for (int i = 0; i < V; i++)
    {
        if (check[i] == 1)
        {
            ans.push_back(i);
        }
    }
    for (auto &x : ans)
        cout << x << " ";
    return 0;
}
