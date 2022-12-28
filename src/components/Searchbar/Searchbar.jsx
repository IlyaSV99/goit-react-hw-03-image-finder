import { Component } from 'react';

import SearchForm from 'components/SearchForm';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Button from 'components/Button';
import Modal from 'components/Modal';
import { getImages } from 'api/api';

class Searchbar extends Component {
    state = {
      items: [],
      query: '',
      page: 1,
      totalPages: 0,
      showModal: false,
      modalContent:{},
      error: false,
      loading: false,
    };
  
    componentDidUpdate(prevProps, prevState) {
      const { page, query} = this.state;
      if (query !== prevState.query) {
        this.fetchProductsList();
      }
      if (page > prevState.page) {
        this.fetchProductsList();
      }
    }
  
    async fetchProductsList() {
      const { query, page } = this.state;
      this.setState({
        loading: true,
        error: false,
      });
      try {
        const { data } = await getImages(query, page);
        const { totalHits, hits } = data;
  
        this.setState(prevState => {
          if (page === 1) {
            return {
              items: [...hits],
              totalPages: totalHits,
            };
          }
          return {
            items: [...prevState.items, ...hits],
            totalPages: totalHits,
          };
        });
      } catch (error) {
        this.setState({
          error: true,
        });
      } finally {
        this.setState({ loading: false });
      }
    }
  
    setQuery = ({ query }) => {
      this.setState(prevState => {
        if (prevState.query !== query) {
          return {
            query,
            page: 1,
            items: [],
          };
        }
      });
    }
  
    loadMore = () => {
      this.setState(({ page }) => {
        return {
          page: page + 1,
        };
      });
    };
  
    getImg = ({largeImageURL, tags}) => {
      
      this.setState({
        showModal: true,
        modalContent: {largeImageURL, tags},
      })
    }
  
    closeModal = () => {
      this.setState({
        showModal: false,
      });
    };
  
    render() {
      const { items, error, loading, showModal, modalContent, totalPages, page } =
        this.state;
      const { largeImageURL, tags } = modalContent;
  
      return (
        <>
          {showModal && 
            <Modal closeModal={this.closeModal}>
              <img src={largeImageURL} alt={tags} width="900"/>
            </Modal>
          }
  
          <SearchForm onSubmit={this.setQuery} />
          {error && <p>Can't loaded images</p>}
          {loading && <Loader />}
  
          <ImageGallery items={items} onClick={this.getImg} />

          {!loading && items.length >= 12 && page * 12 <= totalPages && (
            <Button loadMore={this.loadMore} />
          )}
        </>
      );
    }
  }
  
  export default Searchbar;
