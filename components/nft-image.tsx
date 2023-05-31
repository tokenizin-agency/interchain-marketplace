import React from 'react';

export interface NftImage {
  uri: string
  alt?: string
}

export default function NftImage({ uri, alt }: NftImage) {
  return (
    <div>
      <div className="h-full w-full overflow-hidden rounded">
        <div className=" h-full w-full transform-gpu transition-transform group-hover/card:scale-[1.04] group-active/card:scale-100 group-hover/largecard:scale-[1.03] group-active/largecard:scale-100 ">
          <div className="md:aspect-h-1 md:aspect-w-1">
            <div className="md:aspect-h-1 md:aspect-w-1">
              <img
                src={uri}
                height="100%" width="100%" alt={alt || ''} className="object-contain transition-all" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}