/**
 * Helper functions for action creators.
 */
export const postOptionsBuilder = (coords: string): object => ({
    method: 'post',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        coords
    })
});