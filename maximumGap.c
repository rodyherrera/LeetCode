#include <stdlib.h>
#include <limits.h>

struct Bucket{
    int min;
    int max;
};

int maximumGap(int* nums, int numsSize){
    if(numsSize < 2) return 0;
    int minVal = INT_MAX;
    int maxVal = INT_MIN;
    for(int i = 0; i < numsSize; i++){
        minVal = (nums[i] < minVal) ? nums[i] : minVal;
        maxVal = (nums[i] > maxVal) ? nums[i] : maxVal;
    }
    // Calculate the bucket size and the number of buckets
    int bucketSize = (maxVal - minVal) / numsSize + 1;
    int bucketCount = (maxVal - minVal) / bucketSize + 1;
    // Allocate memory for the buckets
    struct Bucket* buckets = (struct Bucket*)malloc(bucketCount * sizeof(struct Bucket));
    if(!buckets) return 0;
    // Initialize the buckets
    for(int i = 0; i < bucketCount; i++){
        buckets[i].min = INT_MAX;
        buckets[i].max = INT_MIN;
    }
    // Fill the buckets
    for(int i = 0; i < numsSize; i++){
        int index = (nums[i] - minVal) / bucketSize;
        buckets[index].min = (nums[i] < buckets[index].min) ? nums[i] : buckets[index].min;
        buckets[index].max = (nums[i] > buckets[index].max) ? nums[i] : buckets[index].max;
    }
    // Calculate the maximum gap between non-empty adjacent buckets
    int maxGap = 0;
    int prevMax = minVal;
    for(int i = 0; i < bucketCount; i++){
        if(buckets[i].min != INT_MAX && buckets[i].max != INT_MIN){
            maxGap = (buckets[i].min - prevMax > maxGap) ? buckets[i].min - prevMax : maxGap;
            prevMax = buckets[i].max;
        }
    }
    free(buckets);
    return maxGap;
};