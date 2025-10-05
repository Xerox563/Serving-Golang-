/*
 * Linear Ordering of vertices such that if there is a edge between u and v , then always u appears before v in that ordering .
 * Possible only in DAG [Directed Acyclic Graph]
 */

#include <bits/stdc++.h>
using namespace std;
stack<int> st;

// Kahns algo ..
bool kahns_algo(vector<vector<int>> &prerequisites, int n)
{
    vector<int> adj[n];

    for (auto &it : prerequisites)
    {
        int u = it[0];
        int v = it[1];
        // edge from v -> u
        adj[v].push_back(u);
    }

    //  Calculate indegrees
    vector<int> indegree(n, 0);
    for (int i = 0; i < n; i++)
    {
        for (auto &it : adj[i])
        {
            indegree[it]++;
        }
    }

    queue<int> q;
    for (int i = 0; i < n; i++)
    {
        if (indegree[i] == 0)
        {
            q.push(i);
        }
    }

    vector<int> ans;
    while (!q.empty())
    {
        int node = q.front();
        q.pop();
        ans.push_back(node);

        // traverse adjacents
        for (auto &it : adj[node])
        {
            indegree[it]--;
            if (indegree[it] == 0)
            {
                q.push(it);
            }
        }
    }

    if (ans.size() != n)
    {
        return false;
    }

    return true;
}

int main()
{
    vector<vector<int>> prerequisites;
    int n = 10;
    kahns_algo(prerequisites, n);
    return 0;
}
