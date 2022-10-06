import { Select } from 'antd';
import React from 'react';
import { useStore } from './Store'

const { Option } = Select;

const TranslateSelect = () => {
  const language = useStore();
  
  const onChange = (value) => {
    language.void().setLang(value)
    console.log("~ language", language.void().getLang())
  }

  return (
    <Select defaultValue="VN" style={{ width: 120 }} onChange={onChange}>
      <Option value="VN">Việt Nam</Option>
      <Option value="EN">English</Option>
    </Select>
  )
}

export default TranslateSelect