/*
Comparator is just a “rule book”
: For priority_queue, it decides which element is stronger (higher priority).
: For sort, it decides which element goes first.

Behind the scenes
[in case of arrays :]
std::sort typically uses Introsort internally (hybrid of QuickSort + HeapSort + InsertionSort):
It picks a pivot (like QuickSort).
It compares elements to pivot using your comparator:
If cmp(x,pivot) is true → x goes to the left
If false → x goes to the right
It recursively sorts left and right partitions using the same comparator.
So, every comparison is decided by your comparator.
*/

#include <bits/stdc++.h>
using namespace std;
template <typename T>
void printVec(const vector<T> &v)
{
    for (auto &x : v)
        cout << x << " ";
    cout << "\n";
}

// bool compare_asc(int a,int b) {
//     if(a < b) return true;
//     return false;
// }

// bool compare_desc(int a,int b) {
//     if(a > b) return true;
//     return false;
// }

//   bool compare_asc(pair<int,int> &a,pair<int,int> &b) {
//       if(a.first < b.first) return true;
//       else if(a.first == b.first) {
//           if(a.second < b.second) {
//               return true;
//           } else {
//               return false;
//           }
//       } else {
//           return false;
//       }
//   }

//     bool compare_desc(pair<int,int> &a,pair<int,int> &b) {
//       if(a.first > b.first) return true;
//       else if(a.first == b.first) {
//           if(a.second > b.second) {
//               return true;
//           } else {
//               return false;
//           }
//       } else {
//           return false;
//       }
//   }
// auto cmp = [] (pair<int,int> &a, pair<int,int> &b) {
//     if(a.first > b.first) return true;
//     else if(a.first == b.first) {
//         if(a.second < b.second) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     return false;
// };

bool comp(string &a, string &b)
{
    auto cntVowels = [](string &s)
    {
        int cnt = 0;
        for (auto ch : s)
        {
            if (string("aeiouAEIOU").find(ch) != string::npos)
            {
                cnt++;
            }
        }
        return cnt;
    };
    return cntVowels(a) > cntVowels(b); // larger vowels first !!
}

int main()
{
    // your code goes here
    int n;
    // vector<int> arr = {2,8,4,3,6,7,19,18,17};
    // sort(arr.begin(),arr.end(),compare_asc);
    // printVec(arr);
    // sort(arr.begin(),arr.end(),compare_desc);
    // printVec(arr);
    // vector<pair<int,int>> p_arr = {{12,3},{5,4},{3,1},{6,4},{8,3},{1,1},{2,5},{2,4}};
    // 	sort(p_arr.begin(),p_arr.end(),compare_asc);
    // 	for(auto &x : p_arr) {
    // 	    cout<<" ("<<x.first<<" "<<x.second<<") ";
    // 	}
    //     sort(p_arr.begin(),p_arr.end(),compare_desc);
    // 	for(auto &x : p_arr) {
    // 	    cout<<" ("<<x.first<<" "<<x.second<<") ";
    // 	}

    /*
    ** Comparator return value:
    * true → a has lower priority than b → b goes up
    * false → a has higher priority than b → a stays or goes up

    */

    // priority_queue<pair<int,int>,vector<pair<int,int>>,decltype(cmp)> pq(cmp);
    // decltype(cmp) tells the priority queue what type of comparator it uses,
    // pq(cmp) gives the priority queue the actual comparator object to use.

    // for(auto &x : p_arr) {
    //     pq.push({x.first,x.second});
    // }

    // while(!pq.empty()) {
    //     cout << pq.top().first << " " << pq.top().second << "\n";
    //     pq.pop();
    // }

    vector<string> v = {"apple", "banana", "kiwi", "orange", "Mango"};
    sort(v.begin(), v.end(), comp);
    for (auto &x : v)
    {
        cout << x << " ";
    }
}
