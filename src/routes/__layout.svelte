<script lang="ts">
    import { page } from '$app/stores';
    import '../app.scss';

    let isMenuActive = false;

    function documentClick(event: Event) {
        if (isMenuActive) {
            const target = event.target as Element;
            for (const className of target.classList || []) {
                if (className.startsWith('navbar')) {
                    return;
                }
            }
            isMenuActive = false;
        }
    }

    function navBarClick() {
        isMenuActive = !isMenuActive;
    }

    function linkClick() {
        isMenuActive = false;
    }
</script>

<svelte:head>
    <link rel="manifest" href="manifest.json" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <title>Amalgameet</title>
</svelte:head>
<svelte:window on:click={documentClick} on:touchend={documentClick} />

<nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" class:is-active={$page.path === '/'} href="/">Amalgameet</a>

        <a role="button" class="navbar-burger" class:is-active={isMenuActive} aria-label="menu" aria-expanded="false" on:click={navBarClick} href={'javascript:void(0)'}>
            <!-- navbar-span class prevents bodyClick from closing the navbar -->
            <span class="navbar-span" aria-hidden="true" />
            <span class="navbar-span" aria-hidden="true" />
            <span class="navbar-span" aria-hidden="true" />
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" class:is-active={isMenuActive}>
        <div class="navbar-start">
            <a class="navbar-item" class:is-active={$page.path.startsWith('/events')} href="/events" on:click={linkClick}>Events</a>
            <a class="navbar-item" class:is-active={$page.path.startsWith('/meetings')} href="/meetings" on:click={linkClick}>Meetings</a>

            <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link" href={'javascript:void(0)'}>More</a>

                <div class="navbar-dropdown">
                    <a class="navbar-item" class:is-active={$page.path.startsWith('/about')} href="/about" on:click={linkClick}>About</a>
                    <a class="navbar-item" class:is-active={$page.path.startsWith('/contact')} href="/contact" on:click={linkClick}>Contact</a>
                    <hr class="navbar-divider" />
                    <a class="navbar-item" class:is-active={$page.path.startsWith('/report-issue')} href="/report-issue" on:click={linkClick}>Report an Issue</a>
                </div>
            </div>
        </div>
    </div>
</nav>

<section class="section p-5">
    <slot />
</section>

<style lang="scss">
    .navbar-menu {
        &.is-active {
            position: absolute;
            width: 100%;
        }
    }
</style>
