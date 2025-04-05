export const FormData = {
    order_id: "test_order_id:" + Math.floor(Math.random() * 1000000),
    form_stage: 0,
    order_type: "",
    video_footage: {
        raw_footage_size: "",
        raw_footage_length: ""
    },
    add_ons: [
        {
            title: "Thumbnail",
            number: 0
        },
        {
            title: "Vertical Reformat",
            number: 0
        },
        {
            title: "Square Reformat",
            number: 0
        },
        {
            title: "Horizontal Reformat",
            number: 0
        },
        {
            title: "Full Video Captions",
            number: 0
        },
        {
            title: "Premiere Pro Project File",
            number: 0
        },
    ],
    logistics: {
        video_title: "",
        video_category: "",
        video_description: "",
        publish_date: "",
        final_length: "",
    },
    video_tone: {
        funny: false,
        serious: false,
        professional: false,
        elegant: false,
        casual: false,
        informational: false,
        entertaining: false
    },
    video_pace: "",
    raw_footage_url: "",
    order_details: {
        instruction_by_client: "",
        example_videos: "",
        script_link: ""
    }
}