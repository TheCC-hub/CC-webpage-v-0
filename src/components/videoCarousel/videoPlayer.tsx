import MuxPlayer from '@mux/mux-player-react';

export default function VideoPlayer({ playbackId }: { playbackId: string }) {
    return (
        <MuxPlayer
            playbackId={playbackId}
            metadataVideoTitle="sample video"
            metadata-viewer-user-id="Placeholder (optional)"
            primary-color="#ffffff"
            secondary-color="#000000"
            accent-color="#fa50b5"
            className='h-full w-full'
            playerInitTime={1742388210731}
        />
    );
}