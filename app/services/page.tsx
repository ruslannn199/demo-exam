import type { NextComponentType, NextPageContext } from 'next';

// TODO: Make services page
// 1. Order a service. Form in a modal with next fields:
// Select service, name, phone, email, date and submit button
// Every service have a description and possible directions
// Idea is to have list with an accordion for each service

interface Props {}

const Page: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return <div></div>;
};

export default Page;
