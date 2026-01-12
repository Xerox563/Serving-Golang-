#include <bits/stdc++.h>
using namespace std;
#define ll long long

int main()
{
    ll n, m, k, q;
    cin >> n >> m >> k >> q;

    vector<ll> waste;

    while (k--)
    {
        ll x, y;
        cin >> x >> y;
        ll ind = m * (x - 1) + y;
        waste.push_back(ind);
    }

    sort(waste.begin(), waste.end());

    while (q--)
    {
        ll x, y;
        cin >> x >> y;
        ll ind = m * (x - 1) + y;

        // check if waste
        if (binary_search(waste.begin(), waste.end(), ind))
        {
            cout << "Waste\n";
            continue;
        }

        // count waste cells before this index
        ll p = lower_bound(waste.begin(), waste.end(), ind) - waste.begin();

        // cultivated position
        ll cultivated_pos = ind - p;

        // decide crop
        if (cultivated_pos % 3 == 1)
            cout << "Carrots\n";
        else if (cultivated_pos % 3 == 2)
            cout << "Kiwis\n";
        else
            cout << "Grapes\n";
    }

    return 0;
}
