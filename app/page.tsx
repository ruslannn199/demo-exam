import { Button } from '@/components/ui/button';
import type { NextComponentType, NextPageContext } from 'next';

// TODO: Main page
// Main page must include next components:
// 1. Navigation: About us, Our schools, News and Our services
// 2. Description of company advantages with opportunity to sign up for a trial lesson
// 3. Order a service. Form in a modal with next fields:
// Select service, name, phone, email, date and submit button
// 4. Teacher's info: photo, name and short description
// Should probably be something like news page, but with teacher's info
// 5. News page from news card: max 3 cards

interface Props {}

const Page: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <div>
      <Button>Hello</Button>
    </div>
  );
};

export default Page;
