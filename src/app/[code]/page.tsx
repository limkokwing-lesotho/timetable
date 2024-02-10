import React from 'react';

type Params = {
  params: {
    code: string;
  };
};
export default function page({ params }: Params) {
  return <div>{params.code}</div>;
}
