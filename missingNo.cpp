#include <iostream>
using namespace std;

int main() {
    int arr[] = {1, 2, 3, 5};   
    int n = sizeof(arr) / sizeof(arr[0]);

    int ans = 0;
    for (int i = 1; i <= n + 1; i++) {
        ans ^= i;
    }

 
    for (int i = 0; i < n; i++) {
        ans ^= arr[i];
    }

    cout << ans << endl;
    return 0;
}
