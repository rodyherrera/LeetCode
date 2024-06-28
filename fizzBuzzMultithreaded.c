#include <pthread.h>
#include <stdlib.h>

typedef struct{
    int n;
    int count;
    pthread_mutex_t mutex;
    pthread_cond_t cond;
} FizzBuzz;

FizzBuzz* fizzBuzzCreate(int n){
    FizzBuzz* obj = (FizzBuzz*)malloc(sizeof(FizzBuzz));
    obj->n = n;
    obj->count = 1;
    pthread_mutex_init(&obj->mutex, NULL);
    pthread_cond_init(&obj->cond, NULL);
    return obj;
}

