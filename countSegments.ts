const countSegments = (s: string): number => {
    return s.split(' ').filter(segment => segment.length > 0).length;
};