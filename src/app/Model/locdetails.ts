export interface location
{
    id: number,
    full_name: string,
    status: string,
    location: {
        name: string,
        region: string,
        latitude: number,
        longitude: number
    },
    landing_type: number,
    attempted_landings: number,
    successful_landings: number,
}