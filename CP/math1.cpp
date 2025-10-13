#include <bits/stdc++.h>
#define ll long long
using namespace std;
bool isPrime(ll n)
{
    if (n == 0 || n == 1)
        return false;
    for (int i = 2; i * i <= n; i++)
    {
        if (n % i == 0)
        {
            return false;
        }
    }
    return true;
}
void solve()
{
    ll n;
    cin >> n;
    if (isPrime(n - 2) == true)
    {
        cout << 2 << " " << n - 2 << endl;
    }
    else
    {
        cout << -1 << endl;
    }
}

int main()
{
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    ll tc = 1;
    // cin >> tc;
    while (tc--)
    {
        solve();
    }
    return 0;
}
