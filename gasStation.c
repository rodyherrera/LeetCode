int canCompleteCircuit(int* gas, int gasSize, int* cost, int costSize){
    int total_tank = 0, current_tank = 0;
    int starting_station = 0;
    for(int i = 0; i < gasSize; i++){
        total_tank += gas[i] - cost[i];
        current_tank += gas[i] - cost[i];
        // If the current tak level is negative, reset the start position
        // and current tank
        if(current_tank < 0){
            starting_station = i + 1;
            current_tank = 0;
        }
    }
    // If the total tank level is negative, we can't complete the circuit
    return total_tank >= 0 ? starting_station : -1;
};