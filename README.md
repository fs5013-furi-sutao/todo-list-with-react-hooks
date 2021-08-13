## React Hooks を使った ToDo アプリ

React で Context API と React Hook を使った ToDo タスクを管理する Web アプリを作っていきます

画面から登録したタスクは Local Storage に保存されるので、ブラウザ画面を更新しても、タスクは残り続けます

コンソールから以下のコマンドを順番に実行していきます

``` console
mkdir ./todo-list-react-hooks
```

``` console
cd ./todo-list-react-hooks/
```

``` console
npx create-react-app .
```

``` console
yarn start
```

http://localhost:3000/

VSCode で以下の拡張機能をインストールする
```
dsznajder.es7-react-js-snippets
```
JSX で Emmet を有効にするために Settings に追記する

File > Preferences > Settings から settings.json を開く

settings.json に次のデータを追記する

``` json
"emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
```

これで input と入力しただけで <input type="text" /> が補完されるようになる（Emmet Abbriviation）

以下の2ファイルを削除
```
App.css
logo.svg
```

App.js の <div className="App"> のコンテンツをすべて削除

コンテンツを「Hello React」の文字列にして、ブラウザを確認してライブリロードが効いているかを確認する

次に以下のコンテンツを記載する

``` JSX
<h1>To Do リスト</h1>
<form autoComplete="off">
  <input type="text" name="todos" id="todos"
    required placeholder="何をする必要がありますか？" />
  <button type="submit">追加</button>
</form>
<ul>
  <li>
    <label htmlFor="">
      <input type="checkbox" id="" />
      Cooking To Do
    </label>
    <button>編集</button>
  </li>
  <li>
    <label htmlFor="">
      <input type="checkbox" id="" />
      Cooking To Do
    </label>
    <button>編集</button>
  </li>
</ul>
<div className="row">
  <label htmlFor="all">
    <input type="checkbox" name="all" id="all" />
    すべて
  </label>
  <p>ToDo はありません</p>
  <button id="delete">削除</button>
</div>
```

index.css を編集する

スタイルを変更した後の確認で、スタイルの変更が効かない場合は、Ctrl + F5 でブラウザを更新して再度確認する

body のスタイルシートに以下を追加する

``` css
padding: 0;
font-weight: 600;
```

App クラスへのスタイルシートを以下のように追加する

``` css
.App {
  max-width: 500px;
  width: 100%;
  min-height: 400px;
  box-shadow: 0 2px 6px #555;
  margin: 50px auto;
  padding: 50px;
} 
```

h1 にも次のスタイルをあてる

``` css
h1 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 900;
  color: #666;
}
```

Form にも次のスタイルをあてる

``` css
form {
  width: 100%;
  height: 40px;
  margin: 20px 0;
  display: flex;
}

form input, form button {
  flex: 3;
  border: none;
  outline: none;
  border-bottom: 1px solid #555;
  margin: 0 5px;
}

form button {
  flex: 1;
  background: #555;
  color: white;
  letter-spacing: 2px;
  cursor: pointer;
}
```

リストにも次のスタイルをあてる

``` css 
ul li {
  list-style: none;
  border: 1px solid #ccc;
  margin: 10px 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
}

ul li .active {
  opacity: 0.5;
  text-decoration: line-through;
}
```

App.js のリスト要素に className="active" を付けてみて、スタイルが効くか確認する

リストのボタンにも次のスタイルをあてる

``` css
ul li button, .row button {
  border: none;
  outline: none;
  color: white;
  background: orange;
  padding: 5px 15px;
  cursor: pointer;
}

ul li button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

リストのボタン要素に className="disabled" を付けてみて、スタイルが効くか確認する

.row に対しても次のスタイルをあてる

``` css 
.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.row #delete {
  background: crimson;
}

label {
  cursor: pointer;
}

@media (max-width: 400px) {
  .App {
    padding: 10px;
  }
}
```

components フォルダを新規作成する

components フォルダ内に FormInput.js を新規作成する

まっさらな FormInput.js ファイル内に rfc と入力すると Emmet が効いて、React テンプレートが補完される

FormInput.js の JSX 内に App.js の Form 部分を移植する

``` javascript
import React from 'react'

export default function FormInput() {
    return (
        <form autoComplete="off">
            <input type="text" name="todos" id="todos"
                required placeholder="新しいタスクを登録してください" />
            <button type="submit">追加</button>
        </form>
    )
}
```

App.js に FormInput.js をインポートして、FormInput タグを追記する

``` javascript 
import FormInput from "./components/FormInput";

function App() {
  return (
    <div className="App">
      <h1>To Do リスト</h1>

      <FormInput />

      <ul>
        <li>
          <label htmlFor="">
            <input type="checkbox" id="" />
            Cooking To Do
          </label>
          <button>編集</button>
        </li>
        <li>
          <label htmlFor="" className="active">
            <input type="checkbox" id="" />
            Cooking To Do
          </label>
          <button disabled>編集</button>
        </li>
      </ul>
      <div className="row">
        <label htmlFor="all">
          <input type="checkbox" name="all" id="all" />
          すべて
        </label>
        <p>ToDo はありません</p>
        <button id="delete">削除</button>
      </div>
    </div>
  );
}

export default App;
```

同じように components フォルダ内に List.js と Footer.js を新規作成して、リスト部分、フッタ部分を移植する

List.js
``` javascript
import React from 'react'

export default function List() {
    return (
        <ul>
            <li>
                <label htmlFor="">
                    <input type="checkbox" id="" />
                    Cooking To Do
                </label>
                <button>編集</button>
            </li>
            <li>
                <label htmlFor="" className="active">
                    <input type="checkbox" id="" />
                    Cooking To Do
                </label>
                <button disabled>編集</button>
            </li>
        </ul>
    )
}
```

Footer.js
``` javascript
import React from 'react'

export default function Footer() {
    return (
        <div className="row">
            <label htmlFor="all">
                <input type="checkbox" name="all" id="all" />
                すべて
            </label>
            <p>ToDo はありません</p>
            <button id="delete">削除</button>
        </div>
    )
}
```

App.js
``` javascript
import FormInput from "./components/FormInput";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <h1>To Do リスト</h1>
      <FormInput />
      <List />
      <Footer />
    </div>
  );
}

export default App;
```

components フォルダ内に ListItem.js を新規作成して、コンポーネント化する

ListItem.js
``` javascript
import React from 'react'

export default function ListItem() {
    return (
        <li>
            <label htmlFor="" className="active">
                <input type="checkbox" id="" />
                Cooking To Do
            </label>
            <button>編集</button>
        </li>
    )
}
```

List.js
``` javascript
import React from 'react'
import ListItem from './ListItem'

export default function List() {
    return (
        <ul>
            <ListItem />
            <ListItem />
            <ListItem />
        </ul>
    )
}
```

DataProvider.js を新規作成する

DataProvider.js 
``` javascript
import React, { useState, useEffect, createContext } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useState([
        { name: "cooking", complete: false },
        { name: "Playing", complete: true },
    ])

    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}
```

DataProvider.js に合わせて、List.js も修正する

List.js
``` javascript
import React, { useContext } from 'react'
import ListItem from './ListItem'
import { DataContext } from './DataProvider'

export default function List() {
    const [todos, setTodos] = useContext(DataContext);
    console.log(todos);

    return (
        <ul>
            <ListItem />
            <ListItem />
            <ListItem />
        </ul>
    )
}
```

コンソールに todos の値が表示されることを確認する

さらに ListItem.js も修正する

``` javascript
import React from 'react'

export default function ListItem({ todo, id }) {
    return (
        <li>
            <label htmlFor={id}>
                <input type="checkbox" id={id} />
                {todo.name}
            </label>
            <button>編集</button>
        </li>
    )
}
```

ここからフォームの入力がリストに反映されるようにしていく

まず DataProvider.js の todos にセットしていたデータを削除する

``` javascript
import React, { useState, useEffect, createContext } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useState([])

    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}
```

その後、FormInput に

FormInput.js
``` javascript
import React, { useState, useContext } from 'react'
import { DataContext } from './DataProvider'

export default function FormInput() {
    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('');

    const addTodo = e => {
        e.preventDefault();
        setTodos([...todos, { name: todoName, complete: false }]);
        setTodoName('');
    }

    return (
        <form autoComplete="off" onSubmit={addTodo}>
            <input type="text" name="todos" id="todos"
                required placeholder=""新しいタスクを登録してください"
                value={todoName} onChange={e => setTodoName(e.target.value.toLowerCase())} />

            <button type="submit">追加</button>
        </form>
    )
}
```


Chrome に React Developer Tools を追加しておく

DataProvider.js 内で useEffect を使って Local Strage に State を記録するようにする

DataProvider.js
``` javascript
import React, { useState, useEffect, createContext } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        localStorage.setItem('todoStore', JSON.stringify(todos))
    }, [todos]);

    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}
```

Chrome の Developer Tool を使って、Application > LocalStrage > http://localhost:3000 に todoStore としてデータが登録されていることを確認する

次に、Local Storage に値があれば画面に反映されるように useEffect で Local Strage の値をセットする

DataProvider.js
``` javascript
import React, { useState, useEffect, createContext } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const todoStore = JSON.parse(localStorage.getItem('todoStore'));
        if (todoStore) setTodos(todoStore);
    }, []);

    useEffect(() => {
        localStorage.setItem('todoStore', JSON.stringify(todos));
    }, [todos]);

    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}
```

タスクを登録後、F5 でブラウザを更新しても、画面上のリストにタスクの表示が残ることを確認する

List.js で子どもの ListItem.js の checkComplete メソッド経由で swithComplete が実行されるようにする

List.js
``` javascript
import React, { useContext } from 'react'
import ListItem from './ListItem'
import { DataContext } from './DataProvider'

export default function List() {
    const [todos, setTodos] = useContext(DataContext);

    const switchComplete = id => {
        alert(id);
    };

    return (
        <ul>
            {
                todos.map((todo, index) => (
                    <ListItem todo={todo} key={index} id={index}
                        checkComplete={switchComplete} />
                ))
            }
        </ul>
    )
}
```

ListItem.js
``` javascript
import React from 'react'

export default function ListItem({ todo, id, checkComplete }) {
    return (
        <li>
            <label htmlFor={id} className={todo.complete ? "active" : ""}>
                <input type="checkbox" id={id} checked={todo.complete}
                    onChange={() => checkComplete(id)} />
                {todo.name}
            </label>
            <button>編集</button>
        </li>
    )
}
```

これで、リストのチェックボックスにチェックを入れると、リストのインデックスがアラートダイアログ内に表示されることを確認する

確認ができたら、switchComplete の中を実装する

List.js
``` javascript
import React, { useContext } from 'react'
import ListItem from './ListItem'
import { DataContext } from './DataProvider'

export default function List() {
    const [todos, setTodos] = useContext(DataContext);

    const switchComplete = id => {
        const newTodos = [...todos];
        newTodos.forEach((todo, index) => {
            if (index === id) {
                todo.complete = !todo.complete;
            }
            setTodos(newTodos);
        })
    };

    return (
        <ul>
            {
                todos.map((todo, index) => (
                    <ListItem todo={todo} key={index} id={index}
                        checkComplete={switchComplete} />
                ))
            }
        </ul>
    )
}
```

これでチェックボックスをクリックすると、チェックボックスのチェックが入り切りできることを確認する

さらにリストのボタンの disabled を todo.complete を連動させ、チェックを外すとボタンも無効化されることを確認する

ListItem.js
``` javascript
import React from 'react'

export default function ListItem({ todo, id, checkComplete }) {
    return (
        <li>
            <label htmlFor={id} className={todo.complete ? "active" : ""}>
                <input type="checkbox" id={id} checked={todo.complete}
                    onChange={() => checkComplete(id)} />
                {todo.name}
            </label>
            <button disabled={todo.complete}>編集</button>
        </li>
    )
}
```

ListItem.js に新しい State として onEdit と editValue を用意し、 handleOnEdit と handleSave の関数変数を実装する

ListItem.js
``` javascript
import React, { useState } from 'react'

export default function ListItem({ todo, id, checkComplete }) {
    const [onEdit, setOnEdit] = useState(false);
    const [editValue, setEditValue] = useState(todo.name);

    const handleOnEdit = () => {
        setOnEdit(true);
    };

    const handleSave = id => {
        setOnEdit(false);
    };

    if (onEdit) {
        return (
            <li>
                <input type="text" id="editValue" value={editValue}
                    name="editValue" onChange={e => setEditValue(e.target.value.toLowerCase())} />
                <button onClick={() => handleSave(id)}>保存</button>
            </li>
        )

    }

    return (
        <li>
            <label htmlFor={id} className={todo.complete ? "active" : ""}>
                <input type="checkbox" id={id} checked={todo.complete}
                    onChange={() => checkComplete(id)} />
                {todo.name}
            </label>
            <button disabled={todo.complete} onClick={handleOnEdit}>編集</button>
        </li>
    )
}
```

まだ、編集した値が保存後のリストに反映されていないことを確認する

List.js に handleEditTodos を実装し、ListItem.js の引数に handleEditTodos を渡すようにする

List.js
``` javascript
import React, { useContext } from 'react'
import ListItem from './ListItem'
import { DataContext } from './DataProvider'

export default function List() {
    const [todos, setTodos] = useContext(DataContext);

    const switchComplete = id => {
        const newTodos = [...todos];
        newTodos.forEach((todo, index) => {
            if (index === id) {
                todo.complete = !todo.complete;
            }
            setTodos(newTodos);
        })
    };

    const handleEditTodos = (editvalue, id) => {
        const newTodos = [...todos];
        newTodos.forEach((todo, index) => {
            if (index === id) {
                todo.name = editvalue;
            }
        });
        setTodos(newTodos);
    };
    return (
        <ul>
            {
                todos.map((todo, index) => (
                    <ListItem todo={todo} key={index} id={index}
                        checkComplete={switchComplete} handleEditTodos={handleEditTodos} />
                ))
            }
        </ul>
    )
}
```

ListItem.js
``` javascript
import React, { useState } from 'react'

export default function ListItem({ todo, id, checkComplete, handleEditTodos }) {
    const [onEdit, setOnEdit] = useState(false);
    const [editValue, setEditValue] = useState(todo.name);

    const handleOnEdit = () => {
        setOnEdit(true);
    };

    const handleSave = id => {
        setOnEdit(false);
        if (editValue) {
            handleEditTodos(editValue, id);
            return;
        }
        setEditValue(todo.name);
    };

    if (onEdit) {
        return (
            <li>
                <input type="text" id="editValue" value={editValue}
                    name="editValue" onChange={e => setEditValue(e.target.value.toLowerCase())} />
                <button onClick={() => handleSave(id)}>保存</button>
            </li>
        )

    }

    return (
        <li>
            <label htmlFor={id} className={todo.complete ? "active" : ""}>
                <input type="checkbox" id={id} checked={todo.complete}
                    onChange={() => checkComplete(id)} />
                {todo.name}
            </label>
            <button disabled={todo.complete} onClick={handleOnEdit}>編集</button>
        </li>
    )
}
```

これで編集を保存した内容が、リスト表示に反映されることを確認する

Footer.js に新しい State として checkAll を用意し、 Context として todos を用意する

そして handleCheckAll の関数変数を実装する

Footer.js
``` javascript
import React, { useContext, useState } from 'react'
import { DataContext } from './DataProvider'

export default function Footer() {
    const [checkAll, setCheckAll] = useState(false);
    const [todos, setTodos] = useContext(DataContext);

    const handleCheckAll = () => {
        const newTodos = [...todos];
        newTodos.forEach(todo => {
            todo.complete = !checkAll;
        });
        setTodos(newTodos);
        setCheckAll(!checkAll);
    }

    return (
        <div className="row">
            <label htmlFor="all">
                <input type="checkbox" name="all" id="all"
                    onClick={handleCheckAll} checked={checkAll} />
                すべて
            </label>
            <p>ToDo はありません</p>
            <button id="delete">削除</button>
        </div>
    )
}
```

Footer の「すべて」のチェックボックスを入り切りすることで、リストのチェックボックスが反転することを確認する

次に Footer.js の表示を変える

``` javascript
<p>ToDo はありません</p>
```

``` javascript
<p>{todos.length}個の ToDo があります</p>
```

だだ、これだとチェックを入れたリスト（完了扱い）もタスクとしてカウントされてしまうので、 修正していく

まず、Footer.js に deleteTodo として関数変数を実装する

``` javascript
import React, { useContext, useState } from 'react'
import { DataContext } from './DataProvider'

export default function Footer() {
    const [checkAll, setCheckAll] = useState(false);
    const [todos, setTodos] = useContext(DataContext);

    const handleCheckAll = () => {
        const newTodos = [...todos];
        newTodos.forEach(todo => {
            todo.complete = !checkAll;
        });
        setTodos(newTodos);
        setCheckAll(!checkAll);
    }

    const deleteTodo = () => {
        const newTodos = todos.filter(todo => {
            return todo.complete === false;
        });
        setTodos(newTodos);
        setCheckAll(false);
    }

    return (
        <div className="row">
            <label htmlFor="all">
                <input type="checkbox" name="all" id="all"
                    onClick={handleCheckAll} checked={checkAll} />
                すべて
            </label>
            <p>{todos.length}個の ToDo があります</p>
            <button id="delete" onClick={deleteTodo}>削除</button>
        </div>
    )
} 
```

これでチェックを入れたタスクを削除ボタンで削除できるかを確認する

次に、タスクがすべて削除された場合にメッセージが表示されるように Footer.js を変更する

Footer.js
``` javascript
import React, { useContext, useState } from 'react'
import { DataContext } from './DataProvider'

export default function Footer() {
    const [checkAll, setCheckAll] = useState(false);
    const [todos, setTodos] = useContext(DataContext);

    const handleCheckAll = () => {
        const newTodos = [...todos];
        newTodos.forEach(todo => {
            todo.complete = !checkAll;
        });
        setTodos(newTodos);
        setCheckAll(!checkAll);
    }

    const deleteTodo = () => {
        const newTodos = todos.filter(todo => {
            return todo.complete === false;
        });
        setTodos(newTodos);
        setCheckAll(false);
    }

    return (
        <>
            {
                todos.length === 0 ? <h2>おめでとう！ タスクがなくなりました</h2>
                    : <div className="row">
                        <label htmlFor="all">
                            <input type="checkbox" name="all" id="all"
                                onClick={handleCheckAll} checked={checkAll} />
                            すべて
                        </label>
                        <p>{todos.length}個の ToDo があります</p>
                        <button id="delete" onClick={deleteTodo}>削除</button>
                    </div>
            }
        </>
    )
}
```

メッセージの h2 にスタイルもあてる

index.css に追記
``` css
h2 {
  text-align: center;
  color: crimson;
}
```

ここで Developer Tool の console を確認すると以下の警告が表示されている

``` console
Warning: You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.
    at input
    at label
    at div
    at Footer (http://localhost:3000/static/js/main.chunk.js:327:89)
    at div
    at DataProvider (http://localhost:3000/static/js/main.chunk.js:196:83)
    at App
```

この警告通り、Footer.js のチェックボックスを onClick から onChange に修正する

Footer.js
``` javascrip
onChange={handleCheckAll}
```

console の警告がなくなることを確認する

しかし、これだけではまだ、チェックを入れた完了扱いのタスクも ToDo としてカウントしてしまう

そこで次のようにチェックの入っていないタスクだけをカウントするように修正する

Footer.js
``` javascript
<p>{todos.filter(todo => todo.complete === false).length}個の ToDo があります</p>
```

これで想定通りにカウントされるように変わったかを確認する

まだこれだと todos.filter(todo => todo.complete === false).length の部分が長すぎるので、変数として切り出す

Footer.js
``` javascript
import React, { useContext, useState } from 'react'
import { DataContext } from './DataProvider'

export default function Footer() {
    const [checkAll, setCheckAll] = useState(false);
    const [todos, setTodos] = useContext(DataContext);

    const handleCheckAll = () => {
        const newTodos = [...todos];
        newTodos.forEach(todo => {
            todo.complete = !checkAll;
        });
        setTodos(newTodos);
        setCheckAll(!checkAll);
    }

    const newTodosComplete = () => {
        return todos.filter(todo => todo.complete === false);
    };

    const deleteTodo = () => {
        setTodos(newTodosComplete());
        setCheckAll(false);
    }

    return (
        <>
            {
                todos.length === 0 ? <h2>おめでとう！ タスクがなくなりました</h2>
                    : <div className="row">
                        <label htmlFor="all">
                            <input type="checkbox" name="all" id="all"
                                onChange={handleCheckAll} checked={checkAll} />
                            すべて
                        </label>
                        <p>{newTodosComplete().length}個の ToDo があります</p>
                        <button id="delete" onClick={deleteTodo}>削除</button>
                    </div>
            }
        </>
    )
}
```

最後に動作確認をする

これで ToDo アプリは完成です