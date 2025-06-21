#include<iostream>
using namespace std;
void print(int arr[], int length){
    for(int i = 0; i<length; i++){
        cout<<arr[i]<<" ";
    }
}
void insertionSort(int arr[], int length){
    for(int i = 1; i<length; i++){
        for(int j = i; j>=0; j--){
            if (arr[j - 1] > arr[j])
            {
                swap(arr[j-1],arr[j]);
            }
        }
    }
}
int main(){
    int arr[] = {92,45,72,12,5};
    insertionSort(arr,5);
    print(arr,5);
return 0;
}

// Initial: [92, 45, 72, 12, 5]
// Step 1:  [45, 92, 72, 12, 5]   (Insert 45)
// Step 2:  [45, 72, 92, 12, 5]   (Insert 72)
// Step 3:  [12, 45, 72, 92, 5]   (Insert 12)
// Step 4:  [5, 12, 45, 72, 92]   (Insert 5)