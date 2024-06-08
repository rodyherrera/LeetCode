#include <stdbool.h>
#include <string.h>

int countPrimes(int n){
    if(n <= 2) return 0;
    bool isPrime[n];
    memset(isPrime, true, sizeof(isPrime));
    // 0 and 1 are not prime numbers
    isPrime[0] = isPrime[1] = false;
    for(int i = 2; i * i < n; i++){
        if(!isPrime[i]) continue;
        for(int j = i * i; j < n; j += i) isPrime[j] = false;
    }
    int count = 0;
    for(int i = 2; i < n; i++){
        if(isPrime[i]) count++;
    }
    return count;
};