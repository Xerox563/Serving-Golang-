#include <bits/stdc++.h>
using namespace std;
// Dijkstra Implemenatation [Using set]
// It does not works if there is negative weight or has negative weight cycle.
// Time : E*log(V) [E-> no. of edges in total graph, V -> Total number of nodes]
/*
void dijkstra_algo_using_set(int startNode, vector<int> &dist, vector<pair<int, int>> adj[])
{
    set<pair<int, int>> st;
    st.insert({0, startNode});
    dist[startNode] = 0;
    while (!st.empty())
    {
        auto it = *(st.begin());
        int node = it.second;
        int wt = it.first;
        st.erase(it);

        // traversing the adjacents
        for (auto &it : adj[node])
        {
            int adjWt = it.second;
            int adjNode = it.first;
            if (adjWt + wt < dist[adjNode])
            {
                if (dist[adjNode] != 1e9)
                {
                    // not infinity -> already visited so remove that istance as now we have better shorter distance
                    st.erase({dist[adjNode], adjNode});
                }
                dist[adjNode] = adjWt + wt;
                st.insert({dist[adjNode], adjNode});
            }
        }
    }
}
// Dijkstra Implemenatation [Using Priority Queue]
// It does not works if there is negative weight or has negative weight cycle.
// Time : E*log(V) [E-> no. of edges in total graph, V -> Total number of nodes]

void dijkstra_algo(int startNode, vector<int> &dist, vector<pair<int, int>> adj[])
{
    // priority_queue<int, vector<int>, greater<int>> q;
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq; // {dist,node};
    pq.push({0, startNode});
    dist[startNode] = 0;
    while (!pq.empty())
    {
        int node = pq.top().second;
        int wt = pq.top().first;
        pq.pop();

        // traversing the adjacents
        for (auto &it : adj[node])
        {
            int adjWt = it.second;
            int adjNode = it.first;
            if (adjWt + wt < dist[adjNode])
            {
                dist[adjNode] = adjWt + wt;
                pq.push({dist[adjNode], adjNode});
            }
        }
    }
}

int main()
{
    int n, m;
    cin >> n >> m;
    vector<pair<int, int>> adj[n + 1];
    for (int i = 0; i < m; i++)
    {
        int u, v, w;
        cin >> u >> v >> w;
        adj[u].push_back({v, w}); // v is the neightbour of u
        adj[v].push_back({u, w}); //  u is the neighbour of v
    }
    vector<int> dist(n + 1, 1e9);
    int startNode = 1;
    dijkstra_algo(startNode, dist, adj); // start node

    for (int i = 1; i <= n; i++)
        cout << "Node " << i << " -> Distance: " << dist[i] << endl;

    return 0;
}

*/

#include <bits/stdc++.h>
using namespace std;

int shortest_distance_binary_maze(vector<vector<int>> &grid, vector<vector<int>> &dist,
                                  int sri, int srj, int dsti, int dstj)
{
    set<pair<int, pair<int, int>>> st;
    st.insert({0, {sri, srj}});
    dist[sri][srj] = 0;

    int delR[] = {-1, 0, 1, 0};
    int delC[] = {0, 1, 0, -1};

    while (!st.empty())
    {
        auto it = *(st.begin());
        int d = it.first;
        int r = it.second.first;
        int c = it.second.second;
        st.erase(it);

        // If destination reached
        if (r == dsti && c == dstj)
            return d;

        for (int i = 0; i < 4; i++)
        {
            int newRow = r + delR[i];
            int newCol = c + delC[i];

            // Check boundaries and walkable cell
            if (newRow >= 0 && newRow < grid.size() &&
                newCol >= 0 && newCol < grid[0].size() &&
                grid[newRow][newCol] == 1)
            {
                if (d + 1 < dist[newRow][newCol])
                {
                    // If already visited with higher cost, remove that entry
                    if (dist[newRow][newCol] != 1e9)
                        st.erase({dist[newRow][newCol], {newRow, newCol}});

                    dist[newRow][newCol] = d + 1;
                    st.insert({dist[newRow][newCol], {newRow, newCol}});
                }
            }
        }
    }

    // If destination not reachable
    return -1;
}
int path_with_min_effort(vector<vector<int>> &grid, vector<vector<int>> &dist,
                         int sri, int srj, int dsti, int dstj)
{
    set<pair<int, pair<int, int>>> st;
    st.insert({0, {sri, srj}});
    dist[sri][srj] = 0;

    int delR[] = {-1, 0, 1, 0};
    int delC[] = {0, 1, 0, -1};

    while (!st.empty())
    {
        auto it = *(st.begin());
        int diff = it.first;
        int r = it.second.first;
        int c = it.second.second;
        st.erase(it);

        // If destination reached
        if (r == dsti && c == dstj)
            return diff;

        for (int i = 0; i < 4; i++)
        {
            int newRow = r + delR[i];
            int newCol = c + delC[i];

            // Check boundaries and walkable cell
            if (newRow >= 0 && newRow < grid.size() &&
                newCol >= 0 && newCol < grid[0].size())
            {
                int newEffort = max(abs(grid[newRow][newCol] - grid[r][c]), diff);
                if (newEffort < dist[newRow][newCol])
                {
                    dist[newRow][newCol] = newEffort;
                    st.insert({dist[newRow][newCol], {newRow, newCol}});
                }
            }
        }
    }
    return 0;
}

int main()
{
    vector<vector<int>> grid = {
        {1, 0, 1, 1},
        {1, 1, 1, 0},
        {0, 1, 1, 1}};

    int n = grid.size(), m = grid[0].size();
    vector<vector<int>> dist(n, vector<int>(m, 1e9));

    int sri = 0, srj = 0, dsti = 2, dstj = 3;

    cout << shortest_distance_binary_maze(grid, dist, sri, srj, dsti, dstj);
}
