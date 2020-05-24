import { ALayout } from '../../layout/admin-layout';
import { SearchPostByBanner } from '../../components/post/search';
import { EditPost } from '../../components/post/edit/post';
import { useState } from 'react';
import { Tab, TabBody, TabsGroup } from '../../ui-kit/tabs';
import Axios from 'axios';

const tabs = {
  search: Symbol('symbol for tab'),
  edit: Symbol('symbol for tab')
};

function AdminPage () {
  const [state, setAllState] = useState({ postId: null, activeTab: tabs.search });

  function setState (newState) {
    setAllState({ ...state, ...newState });
  }

  async function savePost (data) {
    const { id } = await Axios.post('/api/admin/save-post', data).then(({ data }) => data);
    alert('Пост успешно сохранён');
    setState({ postId: id });
  }

  async function deletePost () {
    console.log(await Axios.get('/api/admin/delete-post?id=' + state.postId).then(({ data }) => data));
    setState({ activeTab: tabs.search });
  }

  return (
    <ALayout>
      <TabsGroup>
        <Tab
          label={(state.postId ? 'Корректировать' : 'Создать') + ' пост'}
          isActive={state.activeTab === tabs.edit}
          onSelect={() => setState({ activeTab: tabs.edit })}
        />
        <Tab
          label="Найти пост"
          isActive={state.activeTab === tabs.search}
          onSelect={() => setState({ activeTab: tabs.search })}
        />
      </TabsGroup>

      <TabBody isActive={state.activeTab === tabs.edit}>
        <EditPost
          id={state.postId}
          onSave={savePost}
          onDelete={deletePost}
          onCancel={() => setState({ postId: null })}
        />
      </TabBody>
      <TabBody isActive={state.activeTab === tabs.search}>
        <SearchPostByBanner
          onSelect={postId => setState({ postId, activeTab: tabs.edit })}
        />
      </TabBody>
    </ALayout>
  );
}

export default AdminPage;
