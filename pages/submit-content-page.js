import { BaseComponent } from '../components/base-component.js';

class SubmitContentPage extends BaseComponent {
    render() { this.shadowRoot.innerHTML = `
      <link rel="stylesheet" type="text/css" href="/styles.css">
      <section class="page">
        <h1>Requirements for Submissions</h1>
        <h2>Visual Podcast or Video Content</h2>
        <ol>
            <li>Video must be at 1080p minimum.  Can be sent via video file, or youtube watch link.</li>
            <li>Thumbnail
                <ul>
                    <li>1920 X 1080</li>
                    <li>This image will be used as the primary thumbnail for your clip in every location it is displayed within the channel.</li>
                </ul>
            </li>
            <li>Video Description
                <ul>
                    <li>This will be displayed next to your thumbnail to tell your viewers what your content is about.</li>
                </ul>
            </li>
            <li>Trailer video
                <ul>
                    <li>Preview or sneak peek/highlights of full length video</li>
                </ul>
            </li>
            <li>Banner Image
                <ul>
                    <li>1920 X 1080</li>
                    <li>This image will appear as a desktop when video is selected.</li>
                </ul>
            </li>
            <li>Poster Image
                <ul>
                    <li>1200 X 1080</li>
                    <li>Vertical Image that will appear when video is selected.</li>
                </ul>
            </li>
        </ol>
        <h2>Music Video Requirements</h2>
        <ol>
            <li>Video must be at 1080p minimum.
                <ul>
                    <li>Can be sent via video file, or youtube watch link.</li>
                </ul>
            </li>
            <li>Cover Art
                <ul>
                    <li>1920 X 1080</li>
                    <li>This image will be used as the primary thumbnail for your clip in every location it is displayed within the channel.</li>
                </ul>
            </li>
            <li>
                Category
                <ul>
                    <li>Music Genre</li>
                </ul>
            </li>
        </ol>
        <h2>Audio Podcast Requirements</h2>
        <ol>
            <li>Video must be at 1080p minimum.
                <ul>
                    <li>Can be sent via video file, or youtube watch link.</li>
                </ul>
            </li>
            <li>Cover Art
                <ul>
                    <li>1920 X 1080</li>
                    <li>This image will be used as the primary thumbnail for your clip in every location it is displayed within the channel.</li>
                </ul>
            </li>
            <li>Video Description
                <ul>
                    <li>This will be displayed next to your thumbnail to tell your viewers what your content is about.</li>
                </ul>
            </li>
        </ol>
        <h3>Optional</h3>
        <ul>
            <li>Names of cast members</li>
            <li>SEO - programmable keywords for search engine optimization</li>
        </ul>
      </section>`; }
}
customElements.define('submit-content-page', SubmitContentPage);
export { SubmitContentPage };
