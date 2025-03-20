
export const isFutureOrToday = (date: string | Date): boolean => {
    const givenDate = new Date(date);

    if (isNaN(givenDate.getTime())) {
        console.error("Invalid date provided:", date);
        return false;
    }
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    givenDate.setHours(0, 0, 0, 0);

    return givenDate >= today;
};
