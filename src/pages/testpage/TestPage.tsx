import React from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import GeneralLayout from "../../layouts/generalLayout/GeneralLayout";

export default function TestPage () {
  
  return <>
    <GeneralLayout
      header={<PageHeader
        title="Test 001"
        description="Challenge yourself! - Sharpen you skills!"
      />}
      metaData={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus libero nulla, pretium vitae volutpat id, porttitor eget turpis. Suspendisse accumsan neque at tellus malesuada, a vehicula est congue. Sed aliquet volutpat diam, vulputate facilisis felis ornare ac. Sed egestas augue eu dui iaculis vehicula iaculis a arcu."
      }
    >
      <QuestionCard />
      
    </GeneralLayout>
  </>
}