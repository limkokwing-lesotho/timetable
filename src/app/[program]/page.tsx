import React from 'react';

type Params = {
  params: {
    program: string;
  };
};
export default function page({ params }: Params) {
  const { program } = params;
  return <div>{program}</div>;
}
