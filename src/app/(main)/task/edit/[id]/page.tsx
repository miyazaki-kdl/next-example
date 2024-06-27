//指定したidはパラメータとして取得できる
//コンポーネントの引数にparamsに設定し、その型をid:stringとする
//idはディレクトリ名と合わせる必要がある。ex.ディレクトリ名がtaskIdならparamsで受け取るのもtaskId
const TaskEditIdPage = ({params} : {params:{id:string}}) => {
  return (
    <div>{params.id}</div>
  )
}

export default TaskEditIdPage