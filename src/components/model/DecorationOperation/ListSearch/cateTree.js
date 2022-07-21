import React, { useEffect, useState } from 'react'
import { Spin, Tree } from 'antd'
import { isTrue } from '@/uitls'
import { getCateTree } from '@/api/admin/goods'
const { TreeNode } = Tree

const treeDataSimpleMode = {
  title: 'categoryName',
  key: 'categoryId',
  children: 'children'
}
const View = () => {
  const [dataSource, setDataSource] = useState([])
  const [spinning, setSpinning] = useState(false)

  useEffect(async () => {
    setSpinning(true)
    const data = await getCateTree({ pId: 0, grade: 3 })
    setDataSource(data?.data || [])
    setSpinning(false)
  }, [])

  function getTreeNode(item = []) {
    return item.map((res) => {
      const children = res[treeDataSimpleMode.children]
      const title = res[treeDataSimpleMode.title]
      const key = res[treeDataSimpleMode.key]
      let data = ''
      if (isTrue(children)) {
        data = getTreeNode(children)
      }
      return (
        <TreeNode class="list-tree" title={title} key={key}>
          {data}
        </TreeNode>
      )
    })
  }

  return (
    <div className="select-table" style={{ overflow: 'auto' }}>
      <Spin spinning={spinning}>
        <div>分类名称</div>
        {isTrue(dataSource) && (
          <Tree defaultExpandAll={true}>{getTreeNode(dataSource)}</Tree>
        )}
      </Spin>
    </div>
  )
}

export default View
