const nftsMetadata = [
  {
    description: "chocolate color",
    external_url:
      "https://ipfs.io/ipfs/bafybeiaxqvf7f24xe6o5ujxuire5svdq5yi6a56mutw5eq6uvfm2byt2fa/",
    image:
      "https://ipfs.io/ipfs/bafybeiaxqvf7f24xe6o5ujxuire5svdq5yi6a56mutw5eq6uvfm2byt2fa/coffee1.jpg",
    name: "Mocha",
    attributes: [
      {
        trait_type: "Discount",
        value: 90,
      },
      {
        trait_type: "Merchant",
        value: "A",
      },
    ],
  },
  {
    description: "green color",
    external_url:
      "https://ipfs.io/ipfs/bafybeiaxqvf7f24xe6o5ujxuire5svdq5yi6a56mutw5eq6uvfm2byt2fa/",
    image:
      "https://ipfs.io/ipfs/bafybeiaxqvf7f24xe6o5ujxuire5svdq5yi6a56mutw5eq6uvfm2byt2fa/coffee2.jpg",
    name: "Espresso",
    attributes: [
      {
        trait_type: "Discount",
        value: 90,
      },
      {
        trait_type: "Merchant",
        value: "B",
      },
    ],
  },
  {
    description: "red color",
    external_url:
      "https://ipfs.io/ipfs/bafybeiaxqvf7f24xe6o5ujxuire5svdq5yi6a56mutw5eq6uvfm2byt2fa/", 
    image:
      "https://ipfs.io/ipfs/bafybeiaxqvf7f24xe6o5ujxuire5svdq5yi6a56mutw5eq6uvfm2byt2fa/coffee3.jpg",
    name: "Cappucino",
    attributes: [
      {
        trait_type: "Discount",
        value: 70,
      },
      {
        trait_type: "Merchant",
        value: "C",
      },
    ],
  },
  {
    description: "blue color",
    external_url:
      "https://ipfs.io/ipfs/bafybeiaxqvf7f24xe6o5ujxuire5svdq5yi6a56mutw5eq6uvfm2byt2fa/",
    image:
      "https://ipfs.io/ipfs/bafybeiaxqvf7f24xe6o5ujxuire5svdq5yi6a56mutw5eq6uvfm2byt2fa/coffee4.jpg",
    name: "Black Coffee",
    attributes: [
      {
        trait_type: "Discount",
        value: 80,
      },
      {
        trait_type: "Merchant",
        value: "D",
      },
    ],
  },
  {
    description: "white color",
    external_url:
      "https://ipfs.io/ipfs/bafybeiaxqvf7f24xe6o5ujxuire5svdq5yi6a56mutw5eq6uvfm2byt2fa/",
    image:
      "https://ipfs.io/ipfs/bafybeiaxqvf7f24xe6o5ujxuire5svdq5yi6a56mutw5eq6uvfm2byt2fa/coffee5.jpg",
    name: "Americano",
    attributes: [
      {
        trait_type: "Discount",
        value: 90,
      },
      {
        trait_type: "Merchant",
        value: "E",
      },
    ],
  },
];

export type NFTMetaData = (typeof nftsMetadata)[number];

export default nftsMetadata;
