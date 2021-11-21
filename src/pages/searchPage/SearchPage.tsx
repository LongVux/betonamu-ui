import React from "react";
import AppCard from "../../components/AppCard/AppCard";
import AppTab from "../../components/AppTab/AppTab";
import { articleListMock } from "../../__mocks__/articleMork";
import { testListMock } from "../../__mocks__/testMock";

type SearchPageProps = {

}

export default function SearchPage (props: SearchPageProps) {
  return (
    <>
      <AppTab
        title="Article"
        pageLimit={5}
        dataSource={articleListMock.map((article, index) => {
          return <AppCard
            key={index}
            dataSource={article}
            link={`/article/${article.id}`} />
        })
        }
      />
      <AppTab
          title="Reading Test"
          pageLimit={5}
          dataSource={testListMock.map((test, index) => {
            return <AppCard
              key={index}
              dataSource={test}
              link={`/studyMaterial/${test.id}`} />
          })
          }
        />
        <AppTab
          title="Listening Test"
          pageLimit={5}
          dataSource={testListMock.map((test, index) => {
            return <AppCard
              key={index}
              dataSource={test}
              link={`/studyMaterial/${test.id}`} />
          })
          }
        />
    </>
  )
}