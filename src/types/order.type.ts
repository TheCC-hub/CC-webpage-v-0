export interface OrderInterface {
    order_id: string;
    form_stage?: number
    order_type: string;
    video_footage: {
        raw_footage_size: string;
        raw_footage_length: string;
    };
    add_ons: {
        title: string;
        number: number;
    }[];
    logistics: {
        video_title: string,
        video_category: string,
        video_description: string,
        publish_date: string,
        final_length: string,
    };
    video_tone: {
        funny: boolean,
        serious: boolean,
        professional: boolean,
        elegant: boolean,
        casual: boolean,
        informational: boolean,
        entertaining: boolean
    };
    video_pace: string;
    raw_footage_url: string;
    order_details: {
        instruction_by_client: string,
        example_videos: string,
        script_link: string
    };
    status: "completed" | "pending",
}