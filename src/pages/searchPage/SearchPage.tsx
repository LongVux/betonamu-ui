import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AppCard from "../../components/AppCard/AppCard";
import AppTab from "../../components/AppTab/AppTab";
import { Article } from "../../models/response/article";
import { Test } from "../../models/response/test";
import { getSearchResult } from "../../service/test.service";
import "./SearchPage.scss"

export default function SearchPage() {

  const [results, setResults] = useState([[] as Article[], [] as Test[], [] as Test[]]);
  const params = useParams<{ keyword: string }>();
  const [loading, setLoading] = useState(true);

  const getResult = async () => {
    const response = await getSearchResult(params.keyword)
    console.log(response)
    setResults(response.data)
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true)
    getResult();
  }, [params.keyword])

  if (loading) {
    return <div className="search-message"><Spin /></div>
  }

  return (
    <>
      <div className="search-message">{
        (results[0].length === 0 && results[1].length === 0 && results[2].length === 0) ? 
          `No result found for "${params.keyword}"` :
          `Result(s) for "${params.keyword}"`
      }</div>
      {
        results[0].length > 0 &&
        <AppTab
          title="Article"
          pageLimit={5}
          dataSource={(results[0] as Article[]).map((article, index) => {
            return <AppCard
              key={index}
              title={article.title}
              tag={article.tag}
              level={article.level.toString()}
              link={`/article/${article.id}`} />
          })
          }
        />}
      {
        results[1].length > 0 &&
        <AppTab
          title="Reading Test"
          pageLimit={5}
          dataSource={(results[1] as Test[]).map((test, index) => {
            return <AppCard
              key={index}
              title={test.testName}
              tag={[test.testType]}
              level={"N5"}
              link={`/studyMaterial/${test.id}`} />
          })
          }
        />}
      {
        results[2].length > 0 &&
        <AppTab
          title="Listening Test"
          pageLimit={5}
          dataSource={(results[2] as Test[]).map((test, index) => {
            return <AppCard
              key={index}
              title={test.testName}
              tag={[test.testType]}
              level={"N5"}
              link={`/studyMaterial/${test.id}`} />
          })
          }
        />}
    </>
  )
}