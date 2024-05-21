const frequencySort = (str: string): string => {
    // Create a map to store the frequency of each character
    const charFrequency = new Map<string, number>();
    // Count the frequency of each character
    for(const char of str){
        charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }
    // Convert the map to an array of [char, frequency] tuples
    const charFrequencyArray = Array.from(charFrequency.entries());
    // Sort the array in descending order based on frequency, and for
    // equal frequencies, sort in ascending order based on the character
    charFrequencyArray.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    // Build the sorted string by repeating each character based on its frequency
    let sortedString = '';
    for(const [char, frequency] of charFrequencyArray){
        sortedString += char.repeat(frequency);
    }
    return sortedString;
};