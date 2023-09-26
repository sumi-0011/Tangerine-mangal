import { useEffect } from 'react';
import styled from 'styled-components';

import { instance } from '../../api';
import BottomLeftArrowButton from '../../components/BottomLeftArrowButton';
import PageContainer from '../../components/PageContainer';
import StaggerWrapper from '../../components/StaggerWrapper';
import { defaultFadeInUpVariants } from '../../constants/motions';
import { STORAGE_KEY } from '../../constants/storage';
import useInnerNavigator from '../../hooks/useInnerNavigator';
import Character from './Character';

function ResultLoadingPage() {
  const { push } = useInnerNavigator();

  useEffect(() => {
    const timer = setTimeout(() => {
      saveData();
      // push('/story');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const saveData = async () => {
    const res = await submit();
    console.log(res);

    localStorage.setItem(STORAGE_KEY.storyData, JSON.stringify(res));
    push('/story');
  };

  const submit = async () => {
    try {
      const input = JSON.parse(
        localStorage.getItem(STORAGE_KEY.userInput) ||
          `{
        input1: "인심 가득한",
        input2: "고품질의 고기",
        input3: "더운 하루를 식혀준 바다",
      }`,
      );

      const res = await instance.post('/service/gpt', { ...input });

      console.log(res);

      return {
        text1: res.data.text1,
        text2: res.data.text2,
        text3: res.data.text3,
        name: res.data.name,
      };
    } catch (error) {
      return {
        text1:
          '흑돼지 고기를 좋아하고, 서핑 후에 든든한 고기를 먹고 싶은 너를 위해 "오솔길" 식당을 추천해',
        text2:
          '접근성은 물론이고, 흑돼지 고기 전문점이라 넉넉한 양의 신선한 고기를 먹을 수 있을거야',
        text3: '그리고,후하신 사장님 덕분에 너도 곧 “귤망"하게 될꺼야',
        name: '오솔길',
      };
    }
  };

  return (
    <PageContainer>
      <Container>
        <StaggerWrapper paragraphVariants={defaultFadeInUpVariants}>
          <Character />
          <HeadingContainer>
            <h1 className="b-24">내가 그물망을 만들어 올게!.</h1>
            <h1 className="b-24">잠깐만 기다려줘</h1>
          </HeadingContainer>
          <div>
            <p className="r-14">기다리는 동안</p>
            <p className="r-14">
              <strong className="b-14">아름다운 노을</strong>을 구경해보는건 어때?
            </p>
          </div>
        </StaggerWrapper>
      </Container>
    </PageContainer>
  );
}

export default ResultLoadingPage;

const Container = styled.div`
  /* & > article { */
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  /* } */
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  flex-direction: column;
  margin: 50px 0;
`;
