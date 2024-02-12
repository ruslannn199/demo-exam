import Text from '@/components/typography/text';
import Title from '@/components/typography/title';
import { missions } from '@/consts';
import type { Metadata, NextComponentType, NextPageContext } from 'next';

export const metadata: Metadata = {
  title: 'О Нас',
};

interface Props {}

const Page: NextComponentType<NextPageContext, {}, Props> = (
  props: Props,
) => {
  return (
    <div className="flex flex-col gap-12 py-16 px-4">
      <div className="flex gap-12 bg-primary rounded-2xl p-8 text-primary-foreground">
        <div className="flex flex-col gap-8 w-full md:w-1/2 text-justify md:text-left">
          <Title level={2} className="text-xl sm:text-2xl md:text-3xl">
            Благотворительный фонд “HelpingHands”
          </Title>
          <Text className="text-sm sm:text-base">
            Наш благотворительный фонд был создан с целью оказания помощи
            тем, кто в ней нуждается. Мы стремимся улучшить качество жизни
            людей, особенно тех, кто находится в сложной жизненной
            ситуации. Наша миссия - создание устойчивого и доступного
            общества, где каждый имеет равные возможности для развития и
            успеха.
          </Text>
          <Text className="text-sm sm:text-base">
            На протяжении многих лет мы успешно реализуем различные
            проекты, направленные на поддержку малоимущих слоев населения,
            людей с ограниченными возможностями, а также тех, кто попал в
            трудную жизненную ситуацию. Мы верим, что каждый человек
            заслуживает шанса на лучшую жизнь и готовы сделать все
            возможное, чтобы помочь ему в этом.
          </Text>
          <Text className="text-sm sm:text-base">
            В своей работе мы используем разнообразные методы и подходы,
            исходя из специфики каждого проекта. Например, мы можем
            организовывать образовательные программы для детей из
            неблагополучных семей, предоставлять помощь пожилым людям,
            обеспечивать доступ к медицинскому обслуживанию и многое
            другое.
          </Text>
          <Text className="text-sm sm:text-base">
            Наша команда состоит из профессионалов в различных областях,
            которые обладают опытом и знаниями, необходимыми для успешной
            реализации наших проектов. Мы постоянно работаем над улучшением
            наших методов и подходов, чтобы более эффективно достигать
            поставленных целей.
          </Text>
          <Text className="text-sm sm:text-base">
            Мы благодарны всем, кто поддерживает нашу работу и верит в наши
            цели. Ваше участие и поддержка делают возможным то, что мы
            делаем. Вместе мы можем изменить мир к лучшему и сделать его
            более справедливым и равным для всех.
          </Text>
        </div>
        <div className="w-1/2 bg-about rounded-2xl hidden md:block" />
      </div>
      <section className="flex flex-col gap-8">
        <Title className="text-center" level={2}>
          Наша миссия
        </Title>
        {missions.map(({ image, text }, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-center items-center gap-8"
          >
            <div className="w-[64px] h-[64px]">
              {image}
            </div>
            <Text className="max-w-[60%] w-[395px] text-xl">{text}</Text>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Page;
